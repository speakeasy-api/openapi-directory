import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A filter for a string dimension that matches a particular list of options.
 */
export declare class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter extends SpeakeasyBase {
    /**
     * Optional. If true, the match is case-sensitive. If false, the match is case-insensitive. Must be true.
     */
    caseSensitive?: boolean;
    /**
     * Required. The list of possible string values to match against. Must be non-empty.
     */
    values?: string[];
}
