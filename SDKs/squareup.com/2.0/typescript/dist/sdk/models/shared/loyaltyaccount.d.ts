import { SpeakeasyBase } from "../../../internal/utils";
import { LoyaltyAccountExpiringPointDeadline } from "./loyaltyaccountexpiringpointdeadline";
import { LoyaltyAccountMapping } from "./loyaltyaccountmapping";
/**
 * Describes a loyalty account. For more information, see
 *
 * @remarks
 * [Manage Loyalty Accounts Using the Loyalty API](https://developer.squareup.com/docs/loyalty-api/overview).
 */
export declare class LoyaltyAccount extends SpeakeasyBase {
    /**
     * The available point balance in the loyalty account. If points are scheduled to expire, they are listed in the `expiring_point_deadlines` field.
     *
     * @remarks
     *
     * Your application should be able to handle loyalty accounts that have a negative point balance (`balance` is less than 0). This might occur if a seller makes a manual adjustment or as a result of a refund or exchange.
     */
    balance?: number;
    /**
     * The timestamp when the loyalty account was created, in RFC 3339 format.
     */
    createdAt?: string;
    /**
     * The Square-assigned ID of the [customer](https://developer.squareup.com/reference/square_2021-08-18/objects/Customer) that is associated with the account.
     */
    customerId?: string;
    /**
     * The timestamp when enrollment occurred, in RFC 3339 format.
     */
    enrolledAt?: string;
    /**
     * The schedule for when points expire in the loyalty account balance. This field is present only if the account has points that are scheduled to expire.
     *
     * @remarks
     *
     * The total number of points in this field equals the number of points in the `balance` field.
     */
    expiringPointDeadlines?: LoyaltyAccountExpiringPointDeadline[];
    /**
     * The Square-assigned ID of the loyalty account.
     */
    id?: string;
    /**
     * The total points accrued during the lifetime of the account.
     */
    lifetimePoints?: number;
    /**
     * Represents the mapping that associates a loyalty account with a buyer.
     *
     * @remarks
     *
     * Currently, a loyalty account can only be mapped to a buyer by phone number. For more information, see
     * [Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview).
     */
    mapping?: LoyaltyAccountMapping;
    /**
     * The Square-assigned ID of the [loyalty program](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyProgram) to which the account belongs.
     */
    programId: string;
    /**
     * The timestamp when the loyalty account was last updated, in RFC 3339 format.
     */
    updatedAt?: string;
}
