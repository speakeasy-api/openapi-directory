import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single manual trigger in Display & Video 360.
 */
export declare class ManualTriggerInput extends SpeakeasyBase {
    /**
     * Required. The maximum duration of each activation in minutes. Must be between 1 and 360 inclusive. After this duration, the trigger will be automatically deactivated.
     */
    activationDurationMinutes?: string;
    /**
     * Required. Immutable. The unique ID of the advertiser that the manual trigger belongs to.
     */
    advertiserId?: string;
    /**
     * Required. The display name of the manual trigger. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
}
/**
 * Output only. The state of the manual trigger. Will be set to the `INACTIVE` state upon creation.
 */
export declare enum ManualTriggerStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Inactive = "INACTIVE",
    Active = "ACTIVE"
}
/**
 * A single manual trigger in Display & Video 360.
 */
export declare class ManualTrigger extends SpeakeasyBase {
    /**
     * Required. The maximum duration of each activation in minutes. Must be between 1 and 360 inclusive. After this duration, the trigger will be automatically deactivated.
     */
    activationDurationMinutes?: string;
    /**
     * Required. Immutable. The unique ID of the advertiser that the manual trigger belongs to.
     */
    advertiserId?: string;
    /**
     * Required. The display name of the manual trigger. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Output only. The timestamp of the trigger's latest activation.
     */
    latestActivationTime?: string;
    /**
     * Output only. The resource name of the manual trigger.
     */
    name?: string;
    /**
     * Output only. The state of the manual trigger. Will be set to the `INACTIVE` state upon creation.
     */
    state?: ManualTriggerStateEnum;
    /**
     * Output only. The unique ID of the manual trigger.
     */
    triggerId?: string;
}
