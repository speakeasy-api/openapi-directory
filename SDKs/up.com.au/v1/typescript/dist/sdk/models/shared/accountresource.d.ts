import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTypeEnumEnum } from "./accounttypeenumenum";
import { MoneyObject } from "./moneyobject";
import { OwnershipTypeEnumEnum } from "./ownershiptypeenumenum";
export declare class AccountResourceAttributes extends SpeakeasyBase {
    /**
     * The bank account type of this account.
     *
     * @remarks
     *
     */
    accountType: AccountTypeEnumEnum;
    /**
     * The available balance of the account, taking into account any amounts
     *
     * @remarks
     * that are currently on hold.
     *
     */
    balance: MoneyObject;
    /**
     * The date-time at which this account was first opened.
     *
     * @remarks
     *
     */
    createdAt: Date;
    /**
     * The name associated with the account in the Up application.
     *
     * @remarks
     *
     */
    displayName: string;
    /**
     * The ownership structure for this account.
     *
     * @remarks
     *
     */
    ownershipType: OwnershipTypeEnumEnum;
}
export declare class AccountResourceLinks extends SpeakeasyBase {
    /**
     * The canonical link to this resource within the API.
     *
     * @remarks
     *
     */
    self: string;
}
export declare class AccountResourceRelationshipsTransactionsLinks extends SpeakeasyBase {
    /**
     * The link to retrieve the related resource(s) in this relationship.
     *
     * @remarks
     *
     */
    related: string;
}
export declare class AccountResourceRelationshipsTransactions extends SpeakeasyBase {
    links?: AccountResourceRelationshipsTransactionsLinks;
}
export declare class AccountResourceRelationships extends SpeakeasyBase {
    transactions: AccountResourceRelationshipsTransactions;
}
/**
 * Provides information about an Up bank account.
 *
 * @remarks
 *
 */
export declare class AccountResource extends SpeakeasyBase {
    attributes: AccountResourceAttributes;
    /**
     * The unique identifier for this account.
     *
     * @remarks
     *
     */
    id: string;
    links?: AccountResourceLinks;
    relationships: AccountResourceRelationships;
    /**
     * The type of this resource: `accounts`
     */
    type: string;
}
