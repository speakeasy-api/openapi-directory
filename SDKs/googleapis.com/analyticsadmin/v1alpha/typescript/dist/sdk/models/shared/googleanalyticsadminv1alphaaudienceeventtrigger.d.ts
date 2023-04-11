import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. When to log the event.
 */
export declare enum GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum {
    LogConditionUnspecified = "LOG_CONDITION_UNSPECIFIED",
    AudienceJoined = "AUDIENCE_JOINED",
    AudienceMembershipRenewed = "AUDIENCE_MEMBERSHIP_RENEWED"
}
/**
 * Specifies an event to log when a user joins the Audience.
 */
export declare class GoogleAnalyticsAdminV1alphaAudienceEventTrigger extends SpeakeasyBase {
    /**
     * Required. The event name that will be logged.
     */
    eventName?: string;
    /**
     * Required. When to log the event.
     */
    logCondition?: GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum;
}
