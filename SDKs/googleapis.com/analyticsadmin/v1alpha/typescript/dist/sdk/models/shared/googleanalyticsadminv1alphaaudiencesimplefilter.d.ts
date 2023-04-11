import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceFilterExpression } from "./googleanalyticsadminv1alphaaudiencefilterexpression";
/**
 * Required. Immutable. Specifies the scope for this filter.
 */
export declare enum GoogleAnalyticsAdminV1alphaAudienceSimpleFilterScopeEnum {
    AudienceFilterScopeUnspecified = "AUDIENCE_FILTER_SCOPE_UNSPECIFIED",
    AudienceFilterScopeWithinSameEvent = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT",
    AudienceFilterScopeWithinSameSession = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION",
    AudienceFilterScopeAcrossAllSessions = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS"
}
/**
 * Defines a simple filter that a user must satisfy to be a member of the Audience.
 */
export declare class GoogleAnalyticsAdminV1alphaAudienceSimpleFilter extends SpeakeasyBase {
    /**
     * A logical expression of Audience dimension, metric, or event filters.
     */
    filterExpression?: GoogleAnalyticsAdminV1alphaAudienceFilterExpression;
    /**
     * Required. Immutable. Specifies the scope for this filter.
     */
    scope?: GoogleAnalyticsAdminV1alphaAudienceSimpleFilterScopeEnum;
}
