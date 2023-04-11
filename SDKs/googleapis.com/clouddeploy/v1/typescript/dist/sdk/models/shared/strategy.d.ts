import { SpeakeasyBase } from "../../../internal/utils";
import { Canary } from "./canary";
import { Standard } from "./standard";
/**
 * Strategy contains deployment strategy information.
 */
export declare class Strategy extends SpeakeasyBase {
    /**
     * Canary represents the canary deployment strategy.
     */
    canary?: Canary;
    /**
     * Standard represents the standard deployment strategy.
     */
    standard?: Standard;
}
