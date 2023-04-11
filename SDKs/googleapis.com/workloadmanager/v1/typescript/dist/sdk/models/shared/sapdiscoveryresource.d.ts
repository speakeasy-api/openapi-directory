import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of this resource.
 */
export declare enum SapDiscoveryResourceResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED",
    Compute = "COMPUTE",
    Storage = "STORAGE",
    Network = "NETWORK"
}
/**
 * Message describing a resource.
 */
export declare class SapDiscoveryResource extends SpeakeasyBase {
    /**
     * A list of resource URIs related to this resource.
     */
    relatedResources?: string[];
    /**
     * ComputeInstance, ComputeDisk, VPC, Bare Metal server, etc.
     */
    resourceKind?: string;
    /**
     * The type of this resource.
     */
    resourceType?: SapDiscoveryResourceResourceTypeEnum;
    /**
     * URI of the resource, includes project, location, and name.
     */
    resourceUri?: string;
    /**
     * Unix timestamp of when this resource last had its discovery data updated.
     */
    updateTime?: string;
}
