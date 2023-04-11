import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression } from "./googleanalyticsadminv1alphaexpandeddatasetfilterexpression";
/**
 * A resource message representing a GA4 ExpandedDataSet.
 */
export declare class GoogleAnalyticsAdminV1alphaExpandedDataSet extends SpeakeasyBase {
    /**
     * Output only. Time when expanded data set began (or will begin) collecing data.
     */
    dataCollectionStartTime?: string;
    /**
     * Optional. The description of the ExpandedDataSet. Max 50 chars.
     */
    description?: string;
    /**
     * A logical expression of EnhancedDataSet dimension filters.
     */
    dimensionFilterExpression?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression;
    /**
     * Immutable. The list of dimensions included in the ExpandedDataSet. See the [API Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#dimensions) for the list of dimension names.
     */
    dimensionNames?: string[];
    /**
     * Required. The display name of the ExpandedDataSet. Max 200 chars.
     */
    displayName?: string;
    /**
     * Immutable. The list of metrics included in the ExpandedDataSet. See the [API Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics) for the list of dimension names.
     */
    metricNames?: string[];
    /**
     * Output only. The resource name for this ExpandedDataSet resource. Format: properties/{property_id}/expandedDataSets/{expanded_data_set}
     */
    name?: string;
}
/**
 * A resource message representing a GA4 ExpandedDataSet.
 */
export declare class GoogleAnalyticsAdminV1alphaExpandedDataSetInput extends SpeakeasyBase {
    /**
     * Optional. The description of the ExpandedDataSet. Max 50 chars.
     */
    description?: string;
    /**
     * A logical expression of EnhancedDataSet dimension filters.
     */
    dimensionFilterExpression?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression;
    /**
     * Immutable. The list of dimensions included in the ExpandedDataSet. See the [API Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#dimensions) for the list of dimension names.
     */
    dimensionNames?: string[];
    /**
     * Required. The display name of the ExpandedDataSet. Max 200 chars.
     */
    displayName?: string;
    /**
     * Immutable. The list of metrics included in the ExpandedDataSet. See the [API Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics) for the list of dimension names.
     */
    metricNames?: string[];
}
