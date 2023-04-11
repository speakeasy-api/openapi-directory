import { SpeakeasyBase } from "../../../internal/utils";
import { FleetLifecycleState } from "./fleetlifecyclestate";
/**
 * Fleet contains the Fleet-wide metadata and configuration.
 */
export declare class Fleet extends SpeakeasyBase {
    /**
     * Output only. When the Fleet was created.
     */
    createTime?: string;
    /**
     * Output only. When the Fleet was deleted.
     */
    deleteTime?: string;
    /**
     * Optional. A user-assigned display name of the Fleet. When present, it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: `Production Fleet`
     */
    displayName?: string;
    /**
     * Output only. The full, unique resource name of this fleet in the format of `projects/{project}/locations/{location}/fleets/{fleet}`. Each GCP project can have at most one fleet resource, named "default".
     */
    name?: string;
    /**
     * FleetLifecycleState describes the state of a Fleet resource.
     */
    state?: FleetLifecycleState;
    /**
     * Output only. Google-generated UUID for this resource. This is unique across all Fleet resources. If a Fleet resource is deleted and another resource with the same name is created, it gets a different uid.
     */
    uid?: string;
    /**
     * Output only. When the Fleet was last updated.
     */
    updateTime?: string;
}
/**
 * Fleet contains the Fleet-wide metadata and configuration.
 */
export declare class FleetInput extends SpeakeasyBase {
    /**
     * Optional. A user-assigned display name of the Fleet. When present, it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: `Production Fleet`
     */
    displayName?: string;
}
