import { SpeakeasyBase } from "../../../internal/utils";
import { LabelDescriptor } from "./labeldescriptor";
/**
 * The product launch stage for channels of this type.
 */
export declare enum NotificationChannelDescriptorLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}
export declare enum NotificationChannelDescriptorSupportedTiersEnum {
    ServiceTierUnspecified = "SERVICE_TIER_UNSPECIFIED",
    ServiceTierBasic = "SERVICE_TIER_BASIC",
    ServiceTierPremium = "SERVICE_TIER_PREMIUM"
}
/**
 * A description of a notification channel. The descriptor includes the properties of the channel and the set of labels or fields that must be specified to configure channels of a given type.
 */
export declare class NotificationChannelDescriptor extends SpeakeasyBase {
    /**
     * A human-readable description of the notification channel type. The description may include a description of the properties of the channel and pointers to external documentation.
     */
    description?: string;
    /**
     * A human-readable name for the notification channel type. This form of the name is suitable for a user interface.
     */
    displayName?: string;
    /**
     * The set of labels that must be defined to identify a particular channel of the corresponding type. Each label includes a description for how that field should be populated.
     */
    labels?: LabelDescriptor[];
    /**
     * The product launch stage for channels of this type.
     */
    launchStage?: NotificationChannelDescriptorLaunchStageEnum;
    /**
     * The full REST resource name for this descriptor. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannelDescriptors/[TYPE] In the above, [TYPE] is the value of the type field.
     */
    name?: string;
    /**
     * The tiers that support this notification channel; the project service tier must be one of the supported_tiers.
     */
    supportedTiers?: NotificationChannelDescriptorSupportedTiersEnum[];
    /**
     * The type of notification channel, such as "email" and "sms". To view the full list of channels, see Channel descriptors (https://cloud.google.com/monitoring/alerts/using-channels-api#ncd). Notification channel types are globally unique.
     */
    type?: string;
}
