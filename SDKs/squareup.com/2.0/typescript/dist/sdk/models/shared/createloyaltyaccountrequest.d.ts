import { SpeakeasyBase } from "../../../internal/utils";
import { LoyaltyAccount } from "./loyaltyaccount";
/**
 * A request to create a new loyalty account.
 */
export declare class CreateLoyaltyAccountRequest extends SpeakeasyBase {
    /**
     * A unique string that identifies this `CreateLoyaltyAccount` request.
     *
     * @remarks
     * Keys can be any valid string, but must be unique for every request.
     */
    idempotencyKey: string;
    /**
     * Describes a loyalty account. For more information, see
     *
     * @remarks
     * [Manage Loyalty Accounts Using the Loyalty API](https://developer.squareup.com/docs/loyalty-api/overview).
     */
    loyaltyAccount: LoyaltyAccount;
}
