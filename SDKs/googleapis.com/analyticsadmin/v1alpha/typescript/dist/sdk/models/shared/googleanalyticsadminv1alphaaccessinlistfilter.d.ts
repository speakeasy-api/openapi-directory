import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result needs to be in a list of string values.
 */
export declare class GoogleAnalyticsAdminV1alphaAccessInListFilter extends SpeakeasyBase {
    /**
     * If true, the string value is case sensitive.
     */
    caseSensitive?: boolean;
    /**
     * The list of string values. Must be non-empty.
     */
    values?: string[];
}
