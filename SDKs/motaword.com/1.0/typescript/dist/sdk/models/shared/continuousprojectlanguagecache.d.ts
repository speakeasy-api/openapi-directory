import { SpeakeasyBase } from "../../../internal/utils";
/**
 * TM, MT and Nonparsed cache list for translations
 */
export declare class ContinuousProjectLanguageCache extends SpeakeasyBase {
    /**
     * source > target map of strings for translations
     */
    mt?: Record<string, string>;
    /**
     * source > target map of strings for translations
     */
    nonparsed?: Record<string, string>;
    /**
     * source > target map of strings for translations
     */
    tm?: Record<string, string>;
}
