import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceEventTrigger } from "./googleanalyticsadminv1alphaaudienceeventtrigger";
import { GoogleAnalyticsAdminV1alphaAudienceFilterClause } from "./googleanalyticsadminv1alphaaudiencefilterclause";
/**
 * Immutable. Specifies how long an exclusion lasts for users that meet the exclusion filter. It is applied to all EXCLUDE filter clauses and is ignored when there is no EXCLUDE filter clause in the Audience.
 */
export declare enum GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum {
    AudienceExclusionDurationModeUnspecified = "AUDIENCE_EXCLUSION_DURATION_MODE_UNSPECIFIED",
    ExcludeTemporarily = "EXCLUDE_TEMPORARILY",
    ExcludePermanently = "EXCLUDE_PERMANENTLY"
}
/**
 * A resource message representing a GA4 Audience.
 */
export declare class GoogleAnalyticsAdminV1alphaAudience extends SpeakeasyBase {
    /**
     * Output only. It is automatically set by GA to false if this is an NPA Audience and is excluded from ads personalization.
     */
    adsPersonalizationEnabled?: boolean;
    /**
     * Required. The description of the Audience.
     */
    description?: string;
    /**
     * Required. The display name of the Audience.
     */
    displayName?: string;
    /**
     * Specifies an event to log when a user joins the Audience.
     */
    eventTrigger?: GoogleAnalyticsAdminV1alphaAudienceEventTrigger;
    /**
     * Immutable. Specifies how long an exclusion lasts for users that meet the exclusion filter. It is applied to all EXCLUDE filter clauses and is ignored when there is no EXCLUDE filter clause in the Audience.
     */
    exclusionDurationMode?: GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum;
    /**
     * Required. Immutable. Unordered list. Filter clauses that define the Audience. All clauses will be AND’ed together.
     */
    filterClauses?: GoogleAnalyticsAdminV1alphaAudienceFilterClause[];
    /**
     * Required. Immutable. The duration a user should stay in an Audience. It cannot be set to more than 540 days.
     */
    membershipDurationDays?: number;
    /**
     * Output only. The resource name for this Audience resource. Format: properties/{propertyId}/audiences/{audienceId}
     */
    name?: string;
}
/**
 * A resource message representing a GA4 Audience.
 */
export declare class GoogleAnalyticsAdminV1alphaAudienceInput extends SpeakeasyBase {
    /**
     * Required. The description of the Audience.
     */
    description?: string;
    /**
     * Required. The display name of the Audience.
     */
    displayName?: string;
    /**
     * Specifies an event to log when a user joins the Audience.
     */
    eventTrigger?: GoogleAnalyticsAdminV1alphaAudienceEventTrigger;
    /**
     * Immutable. Specifies how long an exclusion lasts for users that meet the exclusion filter. It is applied to all EXCLUDE filter clauses and is ignored when there is no EXCLUDE filter clause in the Audience.
     */
    exclusionDurationMode?: GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum;
    /**
     * Required. Immutable. Unordered list. Filter clauses that define the Audience. All clauses will be AND’ed together.
     */
    filterClauses?: GoogleAnalyticsAdminV1alphaAudienceFilterClause[];
    /**
     * Required. Immutable. The duration a user should stay in an Audience. It cannot be set to more than 540 days.
     */
    membershipDurationDays?: number;
}
