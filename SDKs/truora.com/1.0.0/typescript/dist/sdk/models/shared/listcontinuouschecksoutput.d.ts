import { SpeakeasyBase } from "../../../internal/utils";
import { Check } from "./check";
/**
 * Represents to ListContinuousChecksOutput
 */
export declare class ListContinuousChecksOutput extends SpeakeasyBase {
    /**
     * List of continuous checks in current page
     *
     * @remarks
     *
     * Default: all
     */
    continuousChecks?: Check[];
    /**
     * Next page URL
     */
    next?: string;
    /**
     * Current page URL
     */
    self?: string;
}
