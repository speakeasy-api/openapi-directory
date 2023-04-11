import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep } from "./googleanalyticsadminv1alphaaudiencesequencefilteraudiencesequencestep";
/**
 * Required. Immutable. Specifies the scope for this filter.
 */
export declare enum GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum {
    AudienceFilterScopeUnspecified = "AUDIENCE_FILTER_SCOPE_UNSPECIFIED",
    AudienceFilterScopeWithinSameEvent = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT",
    AudienceFilterScopeWithinSameSession = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION",
    AudienceFilterScopeAcrossAllSessions = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS"
}
/**
 * Defines filters that must occur in a specific order for the user to be a member of the Audience.
 */
export declare class GoogleAnalyticsAdminV1alphaAudienceSequenceFilter extends SpeakeasyBase {
    /**
     * Required. Immutable. Specifies the scope for this filter.
     */
    scope?: GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum;
    /**
     * Optional. Defines the time period in which the whole sequence must occur.
     */
    sequenceMaximumDuration?: string;
    /**
     * Required. An ordered sequence of steps. A user must complete each step in order to join the sequence filter.
     */
    sequenceSteps?: GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep[];
}
