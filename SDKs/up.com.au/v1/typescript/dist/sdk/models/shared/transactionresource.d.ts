import { SpeakeasyBase } from "../../../internal/utils";
import { MoneyObject } from "./moneyobject";
/**
 * Provides information about an instant reimbursement in the form of
 * cashback.
 *
**/
export declare class TransactionResourceAttributesCashback extends SpeakeasyBase {
    amount: MoneyObject;
    description: string;
}
/**
 * Provides information about a value of money.
 *
**/
export declare class TransactionResourceAttributesForeignAmount extends SpeakeasyBase {
    currencyCode: string;
    value: string;
    valueInBaseUnits: number;
}
/**
 * Provides information about a value of money.
 *
**/
export declare class TransactionResourceAttributesHoldInfoForeignAmount extends SpeakeasyBase {
    currencyCode: string;
    value: string;
    valueInBaseUnits: number;
}
/**
 * Provides information about the amount at which a transaction was in the
 * `HELD` status.
 *
**/
export declare class TransactionResourceAttributesHoldInfo extends SpeakeasyBase {
    amount: MoneyObject;
    foreignAmount: TransactionResourceAttributesHoldInfoForeignAmount;
}
/**
 * Provides information about a value of money.
 *
**/
export declare class TransactionResourceAttributesRoundUpBoostPortion extends SpeakeasyBase {
    currencyCode: string;
    value: string;
    valueInBaseUnits: number;
}
/**
 * Provides information about how a Round Up was applied, such as whether or
 * not a boost was included in the Round Up.
 *
**/
export declare class TransactionResourceAttributesRoundUp extends SpeakeasyBase {
    amount: MoneyObject;
    boostPortion: TransactionResourceAttributesRoundUpBoostPortion;
}
export declare class TransactionResourceAttributes extends SpeakeasyBase {
    amount: MoneyObject;
    cashback: TransactionResourceAttributesCashback;
    createdAt: Date;
    description: string;
    foreignAmount: TransactionResourceAttributesForeignAmount;
    holdInfo: TransactionResourceAttributesHoldInfo;
    message: string;
    rawText: string;
    roundUp: TransactionResourceAttributesRoundUp;
    settledAt: Date;
    status: any;
}
export declare class TransactionResourceLinks extends SpeakeasyBase {
    self: string;
}
export declare class TransactionResourceRelationshipsAccountData extends SpeakeasyBase {
    id: string;
    type: string;
}
export declare class TransactionResourceRelationshipsAccountLinks extends SpeakeasyBase {
    related: string;
}
export declare class TransactionResourceRelationshipsAccount extends SpeakeasyBase {
    data: TransactionResourceRelationshipsAccountData;
    links?: TransactionResourceRelationshipsAccountLinks;
}
export declare class TransactionResourceRelationshipsCategoryData extends SpeakeasyBase {
    id: string;
    type: string;
}
export declare class TransactionResourceRelationshipsCategoryLinks extends SpeakeasyBase {
    related: string;
}
export declare class TransactionResourceRelationshipsCategory extends SpeakeasyBase {
    data: TransactionResourceRelationshipsCategoryData;
    links?: TransactionResourceRelationshipsCategoryLinks;
}
export declare class TransactionResourceRelationshipsParentCategoryData extends SpeakeasyBase {
    id: string;
    type: string;
}
export declare class TransactionResourceRelationshipsParentCategoryLinks extends SpeakeasyBase {
    related: string;
}
export declare class TransactionResourceRelationshipsParentCategory extends SpeakeasyBase {
    data: TransactionResourceRelationshipsParentCategoryData;
    links?: TransactionResourceRelationshipsParentCategoryLinks;
}
export declare class TransactionResourceRelationshipsTagsData extends SpeakeasyBase {
    id: string;
    type: string;
}
export declare class TransactionResourceRelationshipsTagsLinks extends SpeakeasyBase {
    self: string;
}
export declare class TransactionResourceRelationshipsTags extends SpeakeasyBase {
    data: TransactionResourceRelationshipsTagsData[];
    links?: TransactionResourceRelationshipsTagsLinks;
}
export declare class TransactionResourceRelationships extends SpeakeasyBase {
    account: TransactionResourceRelationshipsAccount;
    category: TransactionResourceRelationshipsCategory;
    parentCategory: TransactionResourceRelationshipsParentCategory;
    tags: TransactionResourceRelationshipsTags;
}
export declare class TransactionResource extends SpeakeasyBase {
    attributes: TransactionResourceAttributes;
    id: string;
    links?: TransactionResourceLinks;
    relationships: TransactionResourceRelationships;
    type: string;
}
