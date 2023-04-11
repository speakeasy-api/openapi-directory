import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The current lifecycle state of this Hub.
 */
export declare enum HubStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * Network Connectivity Center is a hub-and-spoke abstraction for network connectivity management in Google Cloud. It reduces operational complexity through a simple, centralized connectivity management model. Following is the resource message of a hub.
 */
export declare class Hub extends SpeakeasyBase {
    /**
     * Time when the Hub was created.
     */
    createTime?: string;
    /**
     * Short description of the hub resource.
     */
    description?: string;
    /**
     * User-defined labels.
     */
    labels?: Record<string, string>;
    /**
     * Immutable. The name of a Hub resource.
     */
    name?: string;
    /**
     * Output only. A list of the URIs of all attached spokes. This field is deprecated and will not be included in future API versions. Call ListSpokes on each region instead.
     */
    spokes?: string[];
    /**
     * Output only. The current lifecycle state of this Hub.
     */
    state?: HubStateEnum;
    /**
     * Output only. Google-generated UUID for this resource. This is unique across all Hub resources. If a Hub resource is deleted and another with the same name is created, it gets a different unique_id.
     */
    uniqueId?: string;
    /**
     * Time when the Hub was updated.
     */
    updateTime?: string;
}
/**
 * Network Connectivity Center is a hub-and-spoke abstraction for network connectivity management in Google Cloud. It reduces operational complexity through a simple, centralized connectivity management model. Following is the resource message of a hub.
 */
export declare class HubInput extends SpeakeasyBase {
    /**
     * Time when the Hub was created.
     */
    createTime?: string;
    /**
     * Short description of the hub resource.
     */
    description?: string;
    /**
     * User-defined labels.
     */
    labels?: Record<string, string>;
    /**
     * Immutable. The name of a Hub resource.
     */
    name?: string;
    /**
     * Time when the Hub was updated.
     */
    updateTime?: string;
}
