import { SpeakeasyBase } from "../../../internal/utils";
import { Check } from "./check";
/**
 * Represents the result of a background check search
 */
export declare class CheckOutput extends SpeakeasyBase {
    /**
     * Represents a background check
     */
    check: Check;
    /**
     * Detail path
     */
    details: string;
    /**
     * Background check URL
     */
    self: string;
}
