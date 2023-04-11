import { SpeakeasyBase } from "../../../internal/utils";
import { MoneyObject } from "./moneyobject";
import { TransactionStatusEnumEnum } from "./transactionstatusenumenum";
/**
 * Provides information about an instant reimbursement in the form of
 *
 * @remarks
 * cashback.
 *
 */
export declare class TransactionResourceAttributesCashback extends SpeakeasyBase {
    /**
     * The total amount of cashback paid, represented as a positive value.
     *
     * @remarks
     *
     */
    amount: MoneyObject;
    /**
     * A brief description of why this cashback was paid.
     *
     * @remarks
     *
     */
    description: string;
}
/**
 * Provides information about a value of money.
 *
 * @remarks
 *
 */
export declare class TransactionResourceAttributesForeignAmount extends SpeakeasyBase {
    /**
     * The ISO 4217 currency code.
     *
     * @remarks
     *
     */
    currencyCode: string;
    /**
     * The amount of money, formatted as a string in the relevant currency.
     *
     * @remarks
     * For example, for an Australian dollar value of $10.56, this field will
     * be `"10.56"`. The currency symbol is not included in the string.
     *
     */
    value: string;
    /**
     * The amount of money in the smallest denomination for the currency, as a
     *
     * @remarks
     * 64-bit integer.  For example, for an Australian dollar value of $10.56,
     * this field will be `1056`.
     *
     */
    valueInBaseUnits: number;
}
/**
 * Provides information about a value of money.
 *
 * @remarks
 *
 */
export declare class TransactionResourceAttributesHoldInfoForeignAmount extends SpeakeasyBase {
    /**
     * The ISO 4217 currency code.
     *
     * @remarks
     *
     */
    currencyCode: string;
    /**
     * The amount of money, formatted as a string in the relevant currency.
     *
     * @remarks
     * For example, for an Australian dollar value of $10.56, this field will
     * be `"10.56"`. The currency symbol is not included in the string.
     *
     */
    value: string;
    /**
     * The amount of money in the smallest denomination for the currency, as a
     *
     * @remarks
     * 64-bit integer.  For example, for an Australian dollar value of $10.56,
     * this field will be `1056`.
     *
     */
    valueInBaseUnits: number;
}
/**
 * Provides information about the amount at which a transaction was in the
 *
 * @remarks
 * `HELD` status.
 *
 */
export declare class TransactionResourceAttributesHoldInfo extends SpeakeasyBase {
    /**
     * The amount of this transaction while in the `HELD` status, in
     *
     * @remarks
     * Australian dollars.
     *
     */
    amount: MoneyObject;
    /**
     * The foreign currency amount of this transaction while in the `HELD`
     *
     * @remarks
     * status. This field will be `null` for domestic transactions. The amount
     * was converted to the AUD amount reflected in the `amount` field.
     *
     */
    foreignAmount: TransactionResourceAttributesHoldInfoForeignAmount;
}
/**
 * Provides information about a value of money.
 *
 * @remarks
 *
 */
export declare class TransactionResourceAttributesRoundUpBoostPortion extends SpeakeasyBase {
    /**
     * The ISO 4217 currency code.
     *
     * @remarks
     *
     */
    currencyCode: string;
    /**
     * The amount of money, formatted as a string in the relevant currency.
     *
     * @remarks
     * For example, for an Australian dollar value of $10.56, this field will
     * be `"10.56"`. The currency symbol is not included in the string.
     *
     */
    value: string;
    /**
     * The amount of money in the smallest denomination for the currency, as a
     *
     * @remarks
     * 64-bit integer.  For example, for an Australian dollar value of $10.56,
     * this field will be `1056`.
     *
     */
    valueInBaseUnits: number;
}
/**
 * Provides information about how a Round Up was applied, such as whether or
 *
 * @remarks
 * not a boost was included in the Round Up.
 *
 */
export declare class TransactionResourceAttributesRoundUp extends SpeakeasyBase {
    /**
     * The total amount of this Round Up, including any boosts, represented as
     *
     * @remarks
     * a negative value.
     *
     */
    amount: MoneyObject;
    /**
     * The portion of the Round Up `amount` owing to boosted Round Ups,
     *
     * @remarks
     * represented as a negative value. If no boost was added to the Round Up
     * this field will be `null`.
     *
     */
    boostPortion: TransactionResourceAttributesRoundUpBoostPortion;
}
export declare class TransactionResourceAttributes extends SpeakeasyBase {
    /**
     * The amount of this transaction in Australian dollars. For
     *
     * @remarks
     * transactions that were once `HELD` but are now `SETTLED`, refer to
     * the `holdInfo` field for the original `amount` the transaction was
     * `HELD` at.
     *
     */
    amount: MoneyObject;
    /**
     * If all or part of this transaction was instantly reimbursed in the
     *
     * @remarks
     * form of cashback, details of the reimbursement.
     *
     */
    cashback: TransactionResourceAttributesCashback;
    /**
     * The date-time at which this transaction was first encountered.
     *
     * @remarks
     *
     */
    createdAt: Date;
    /**
     * A short description for this transaction. Usually the merchant name
     *
     * @remarks
     * for purchases.
     *
     */
    description: string;
    /**
     * The foreign currency amount of this transaction. This field will be
     *
     * @remarks
     * `null` for domestic transactions. The amount was converted to the AUD
     * amount reflected in the `amount` of this transaction. Refer to the
     * `holdInfo` field for the original `foreignAmount` the transaction was
     * `HELD` at.
     *
     */
    foreignAmount: TransactionResourceAttributesForeignAmount;
    /**
     * If this transaction is currently in the `HELD` status, or was ever in
     *
     * @remarks
     * the `HELD` status, the `amount` and `foreignAmount` of the
     * transaction while `HELD`.
     *
     */
    holdInfo: TransactionResourceAttributesHoldInfo;
    /**
     * Boolean flag set to true on transactions that support the use of
     *
     * @remarks
     * categories.
     *
     */
    isCategorizable: boolean;
    /**
     * Attached message for this transaction, such as a payment message, or a
     *
     * @remarks
     * transfer note.
     *
     */
    message: string;
    /**
     * The original, unprocessed text of the transaction. This is often not
     *
     * @remarks
     * a perfect indicator of the actual merchant, but it is useful for
     * reconciliation purposes in some cases.
     *
     */
    rawText: string;
    /**
     * Details of how this transaction was rounded-up. If no Round Up was
     *
     * @remarks
     * applied this field will be `null`.
     *
     */
    roundUp: TransactionResourceAttributesRoundUp;
    /**
     * The date-time at which this transaction settled. This field will be
     *
     * @remarks
     * `null` for transactions that are currently in the `HELD` status.
     *
     */
    settledAt: Date;
    /**
     * The current processing status of this transaction, according to
     *
     * @remarks
     * whether or not this transaction has settled or is still held.
     *
     */
    status: TransactionStatusEnumEnum;
}
export declare class TransactionResourceLinks extends SpeakeasyBase {
    /**
     * The canonical link to this resource within the API.
     *
     * @remarks
     *
     */
    self: string;
}
export declare class TransactionResourceRelationshipsAccountData extends SpeakeasyBase {
    /**
     * The unique identifier of the resource within its type.
     *
     * @remarks
     *
     */
    id: string;
    /**
     * The type of this resource: `accounts`
     */
    type: string;
}
export declare class TransactionResourceRelationshipsAccountLinks extends SpeakeasyBase {
    /**
     * The link to retrieve the related resource(s) in this relationship.
     *
     * @remarks
     *
     */
    related: string;
}
export declare class TransactionResourceRelationshipsAccount extends SpeakeasyBase {
    data: TransactionResourceRelationshipsAccountData;
    links?: TransactionResourceRelationshipsAccountLinks;
}
export declare class TransactionResourceRelationshipsCategoryData extends SpeakeasyBase {
    /**
     * The unique identifier of the resource within its type.
     *
     * @remarks
     *
     */
    id: string;
    /**
     * The type of this resource: `categories`
     */
    type: string;
}
export declare class TransactionResourceRelationshipsCategoryLinks extends SpeakeasyBase {
    /**
     * The link to retrieve the related resource(s) in this relationship.
     *
     * @remarks
     *
     */
    related?: string;
    /**
     * The link to retrieve or modify linkage between this resources and the
     *
     * @remarks
     * related resource(s) in this relationship.
     *
     */
    self: string;
}
export declare class TransactionResourceRelationshipsCategory extends SpeakeasyBase {
    data: TransactionResourceRelationshipsCategoryData;
    links?: TransactionResourceRelationshipsCategoryLinks;
}
export declare class TransactionResourceRelationshipsParentCategoryData extends SpeakeasyBase {
    /**
     * The unique identifier of the resource within its type.
     *
     * @remarks
     *
     */
    id: string;
    /**
     * The type of this resource: `categories`
     */
    type: string;
}
export declare class TransactionResourceRelationshipsParentCategoryLinks extends SpeakeasyBase {
    /**
     * The link to retrieve the related resource(s) in this relationship.
     *
     * @remarks
     *
     */
    related: string;
}
export declare class TransactionResourceRelationshipsParentCategory extends SpeakeasyBase {
    data: TransactionResourceRelationshipsParentCategoryData;
    links?: TransactionResourceRelationshipsParentCategoryLinks;
}
export declare class TransactionResourceRelationshipsTagsData extends SpeakeasyBase {
    /**
     * The label of the tag, which also acts as the tag’s unique identifier.
     *
     * @remarks
     *
     */
    id: string;
    /**
     * The type of this resource: `tags`
     */
    type: string;
}
export declare class TransactionResourceRelationshipsTagsLinks extends SpeakeasyBase {
    /**
     * The link to retrieve or modify linkage between this resources and the
     *
     * @remarks
     * related resource(s) in this relationship.
     *
     */
    self: string;
}
export declare class TransactionResourceRelationshipsTags extends SpeakeasyBase {
    data: TransactionResourceRelationshipsTagsData[];
    links?: TransactionResourceRelationshipsTagsLinks;
}
export declare class TransactionResourceRelationshipsTransferAccountData extends SpeakeasyBase {
    /**
     * The unique identifier of the resource within its type.
     *
     * @remarks
     *
     */
    id: string;
    /**
     * The type of this resource: `accounts`
     */
    type: string;
}
export declare class TransactionResourceRelationshipsTransferAccountLinks extends SpeakeasyBase {
    /**
     * The link to retrieve the related resource(s) in this relationship.
     *
     * @remarks
     *
     */
    related: string;
}
/**
 * If this transaction is a transfer between accounts, this relationship
 *
 * @remarks
 * will contain the account the transaction went to/came from. The
 * `amount` field can be used to determine the direction of the transfer.
 *
 */
export declare class TransactionResourceRelationshipsTransferAccount extends SpeakeasyBase {
    data: TransactionResourceRelationshipsTransferAccountData;
    links?: TransactionResourceRelationshipsTransferAccountLinks;
}
export declare class TransactionResourceRelationships extends SpeakeasyBase {
    account: TransactionResourceRelationshipsAccount;
    category: TransactionResourceRelationshipsCategory;
    parentCategory: TransactionResourceRelationshipsParentCategory;
    tags: TransactionResourceRelationshipsTags;
    /**
     * If this transaction is a transfer between accounts, this relationship
     *
     * @remarks
     * will contain the account the transaction went to/came from. The
     * `amount` field can be used to determine the direction of the transfer.
     *
     */
    transferAccount: TransactionResourceRelationshipsTransferAccount;
}
export declare class TransactionResource extends SpeakeasyBase {
    attributes: TransactionResourceAttributes;
    /**
     * The unique identifier for this transaction.
     *
     * @remarks
     *
     */
    id: string;
    links?: TransactionResourceLinks;
    relationships: TransactionResourceRelationships;
    /**
     * The type of this resource: `transactions`
     */
    type: string;
}
