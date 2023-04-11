import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The state of this location's enrollment in Business calls.
 */
export declare enum BusinessCallsSettingsCallsStateEnum {
    CallsStateUnspecified = "CALLS_STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
/**
 * Business calls settings for a location.
 */
export declare class BusinessCallsSettings extends SpeakeasyBase {
    /**
     * Required. The state of this location's enrollment in Business calls.
     */
    callsState?: BusinessCallsSettingsCallsStateEnum;
    /**
     * Input only. Time when the end user provided consent to the API user to enable business calls.
     */
    consentTime?: string;
    /**
     * Required. The resource name of the calls settings. Format: locations/{location}/businesscallssettings
     */
    name?: string;
}
