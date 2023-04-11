import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { LoyaltyProgram } from "./loyaltyprogram";
/**
 * A response that contains all loyalty programs.
 */
export declare class ListLoyaltyProgramsResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * A list of `LoyaltyProgram` for the merchant.
     */
    programs?: LoyaltyProgram[];
}
