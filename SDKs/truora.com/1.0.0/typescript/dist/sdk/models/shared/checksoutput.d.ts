import { SpeakeasyBase } from "../../../internal/utils";
import { Check } from "./check";
/**
 * Represents the results of a background check search
 */
export declare class ChecksOutput extends SpeakeasyBase {
    /**
     * Background check list in the page
     */
    checks: Check[];
    /**
     * Next page path
     */
    next?: string;
    /**
     * Current page path
     */
    self: string;
}
