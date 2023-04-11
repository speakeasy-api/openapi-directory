import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceFilterExpression } from "./googleanalyticsadminv1alphaaudiencefilterexpression";
/**
 * Required. Immutable. Specifies the scope for this step.
 */
export declare enum GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum {
    AudienceFilterScopeUnspecified = "AUDIENCE_FILTER_SCOPE_UNSPECIFIED",
    AudienceFilterScopeWithinSameEvent = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT",
    AudienceFilterScopeWithinSameSession = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION",
    AudienceFilterScopeAcrossAllSessions = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS"
}
/**
 * A condition that must occur in the specified step order for this user to match the sequence.
 */
export declare class GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep extends SpeakeasyBase {
    /**
     * Optional. When set, this step must be satisfied within the constraint_duration of the previous step (i.e., t[i] - t[i-1] <= constraint_duration). If not set, there is no duration requirement (the duration is effectively unlimited). It is ignored for the first step.
     */
    constraintDuration?: string;
    /**
     * A logical expression of Audience dimension, metric, or event filters.
     */
    filterExpression?: GoogleAnalyticsAdminV1alphaAudienceFilterExpression;
    /**
     * Optional. If true, the event satisfying this step must be the very next event after the event satisfying the last step. If unset or false, this step indirectly follows the prior step; for example, there may be events between the prior step and this step. It is ignored for the first step.
     */
    immediatelyFollows?: boolean;
    /**
     * Required. Immutable. Specifies the scope for this step.
     */
    scope?: GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum;
}
