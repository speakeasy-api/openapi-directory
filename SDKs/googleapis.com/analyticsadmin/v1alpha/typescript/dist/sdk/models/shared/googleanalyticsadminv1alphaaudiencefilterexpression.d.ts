import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilter";
import { GoogleAnalyticsAdminV1alphaAudienceEventFilter } from "./googleanalyticsadminv1alphaaudienceeventfilter";
import { GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList } from "./googleanalyticsadminv1alphaaudiencefilterexpressionlist";
/**
 * A logical expression of Audience dimension, metric, or event filters.
 */
export declare class GoogleAnalyticsAdminV1alphaAudienceFilterExpression extends SpeakeasyBase {
    /**
     * A list of Audience filter expressions.
     */
    andGroup?: GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList;
    /**
     * A specific filter for a single dimension or metric.
     */
    dimensionOrMetricFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter;
    /**
     * A filter that matches events of a single event name. If an event parameter is specified, only the subset of events that match both the single event name and the parameter filter expressions match this event filter.
     */
    eventFilter?: GoogleAnalyticsAdminV1alphaAudienceEventFilter;
    /**
     * A logical expression of Audience dimension, metric, or event filters.
     */
    notExpression?: GoogleAnalyticsAdminV1alphaAudienceFilterExpression;
    /**
     * A list of Audience filter expressions.
     */
    orGroup?: GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList;
}
