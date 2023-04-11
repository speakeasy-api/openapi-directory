import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter } from "./googleanalyticsadminv1alphaexpandeddatasetfilterinlistfilter";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter } from "./googleanalyticsadminv1alphaexpandeddatasetfilterstringfilter";
/**
 * A specific filter for a single dimension
 */
export declare class GoogleAnalyticsAdminV1alphaExpandedDataSetFilter extends SpeakeasyBase {
    /**
     * Required. The dimension name to filter.
     */
    fieldName?: string;
    /**
     * A filter for a string dimension that matches a particular list of options.
     */
    inListFilter?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter;
    /**
     * A filter for a string-type dimension that matches a particular pattern.
     */
    stringFilter?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter;
}
