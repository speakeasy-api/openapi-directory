import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the Feature resource in the Hub API.
 */
export declare enum FeatureResourceStateStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabling = "ENABLING",
    Active = "ACTIVE",
    Disabling = "DISABLING",
    Updating = "UPDATING",
    ServiceUpdating = "SERVICE_UPDATING"
}
/**
 * FeatureResourceState describes the state of a Feature *resource* in the GkeHub API. See `FeatureState` for the "running state" of the Feature in the Hub and across Memberships.
 */
export declare class FeatureResourceState extends SpeakeasyBase {
    /**
     * The current state of the Feature resource in the Hub API.
     */
    state?: FeatureResourceStateStateEnum;
}
