import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { LoyaltyProgram } from "./loyaltyprogram";
/**
 * A response that contains the loyalty program.
 */
export declare class RetrieveLoyaltyProgramResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents a Square loyalty program. Loyalty programs define how buyers can earn points and redeem points for rewards.
     *
     * @remarks
     * Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard.
     * For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
     */
    program?: LoyaltyProgram;
}
