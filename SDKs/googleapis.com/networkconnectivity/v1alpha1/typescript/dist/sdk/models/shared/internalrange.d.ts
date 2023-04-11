import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InternalRangeOverlapsEnum {
    OverlapUnspecified = "OVERLAP_UNSPECIFIED",
    OverlapRouteRange = "OVERLAP_ROUTE_RANGE"
}
/**
 * The type of peering set for this internal range.
 */
export declare enum InternalRangePeeringEnum {
    PeeringUnspecified = "PEERING_UNSPECIFIED",
    ForSelf = "FOR_SELF",
    ForPeer = "FOR_PEER",
    NotShared = "NOT_SHARED"
}
/**
 * The type of usage set for this internal range.
 */
export declare enum InternalRangeUsageEnum {
    UsageUnspecified = "USAGE_UNSPECIFIED",
    ForVpc = "FOR_VPC",
    ExternalToVpc = "EXTERNAL_TO_VPC"
}
/**
 * The internal range resource for IPAM operations within a VPC network. Used to represent a private address range along with behavioral characterstics of that range (its usage and peering behavior). Networking resources can link to this range if they are created as belonging to it.
 */
export declare class InternalRange extends SpeakeasyBase {
    /**
     * Time when the internal range was created.
     */
    createTime?: string;
    /**
     * A description of this resource.
     */
    description?: string;
    /**
     * IP range that this internal range defines.
     */
    ipCidrRange?: string;
    /**
     * User-defined labels.
     */
    labels?: Record<string, string>;
    /**
     * Immutable. The name of an internal range. Format: projects/{project}/locations/{location}/internalRanges/{internal_range} See: https://google.aip.dev/122#fields-representing-resource-names
     */
    name?: string;
    /**
     * The URL or resource ID of the network in which to reserve the internal range. The network cannot be deleted if there are any reserved internal ranges referring to it. Legacy networks are not supported. This can only be specified for a global internal address. Example: - URL: /compute/v1/projects/{project}/global/networks/{resourceId} - ID: network123
     */
    network?: string;
    /**
     * Optional. Types of resources that are allowed to overlap with the current internal range.
     */
    overlaps?: InternalRangeOverlapsEnum[];
    /**
     * The type of peering set for this internal range.
     */
    peering?: InternalRangePeeringEnum;
    /**
     * An alternative to ip_cidr_range. Can be set when trying to create a reservation that automatically finds a free range of the given size. If both ip_cidr_range and prefix_length are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size.
     */
    prefixLength?: number;
    /**
     * Optional. Can be set to narrow down or pick a different address space while searching for a free range. If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.
     */
    targetCidrRange?: string[];
    /**
     * Time when the internal range was updated.
     */
    updateTime?: string;
    /**
     * The type of usage set for this internal range.
     */
    usage?: InternalRangeUsageEnum;
    /**
     * Output only. The list of resources that refer to this internal range. Resources that use the internal range for their range allocation are referred to as users of the range. Other resources mark themselves as users while doing so by creating a reference to this internal range. Having a user, based on this reference, prevents deletion of the internal range that is referred to. Can be empty.
     */
    users?: string[];
}
/**
 * The internal range resource for IPAM operations within a VPC network. Used to represent a private address range along with behavioral characterstics of that range (its usage and peering behavior). Networking resources can link to this range if they are created as belonging to it.
 */
export declare class InternalRangeInput extends SpeakeasyBase {
    /**
     * Time when the internal range was created.
     */
    createTime?: string;
    /**
     * A description of this resource.
     */
    description?: string;
    /**
     * IP range that this internal range defines.
     */
    ipCidrRange?: string;
    /**
     * User-defined labels.
     */
    labels?: Record<string, string>;
    /**
     * Immutable. The name of an internal range. Format: projects/{project}/locations/{location}/internalRanges/{internal_range} See: https://google.aip.dev/122#fields-representing-resource-names
     */
    name?: string;
    /**
     * The URL or resource ID of the network in which to reserve the internal range. The network cannot be deleted if there are any reserved internal ranges referring to it. Legacy networks are not supported. This can only be specified for a global internal address. Example: - URL: /compute/v1/projects/{project}/global/networks/{resourceId} - ID: network123
     */
    network?: string;
    /**
     * Optional. Types of resources that are allowed to overlap with the current internal range.
     */
    overlaps?: InternalRangeOverlapsEnum[];
    /**
     * The type of peering set for this internal range.
     */
    peering?: InternalRangePeeringEnum;
    /**
     * An alternative to ip_cidr_range. Can be set when trying to create a reservation that automatically finds a free range of the given size. If both ip_cidr_range and prefix_length are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size.
     */
    prefixLength?: number;
    /**
     * Optional. Can be set to narrow down or pick a different address space while searching for a free range. If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.
     */
    targetCidrRange?: string[];
    /**
     * Time when the internal range was updated.
     */
    updateTime?: string;
    /**
     * The type of usage set for this internal range.
     */
    usage?: InternalRangeUsageEnum;
}
