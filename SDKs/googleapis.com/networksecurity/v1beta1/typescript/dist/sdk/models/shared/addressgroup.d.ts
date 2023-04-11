import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The type of the Address Group. Possible values are "IPv4" or "IPV6".
 */
export declare enum AddressGroupTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Ipv4 = "IPV4",
    Ipv6 = "IPV6"
}
/**
 * AddressGroup is a resource that specifies how a collection of IP/DNS used in Firewall Policy.
 */
export declare class AddressGroup extends SpeakeasyBase {
    /**
     * Required. Capacity of the Address Group
     */
    capacity?: number;
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string;
    /**
     * Optional. Free-text description of the resource.
     */
    description?: string;
    /**
     * Optional. List of items.
     */
    items?: string[];
    /**
     * Optional. Set of label tags associated with the AddressGroup resource.
     */
    labels?: Record<string, string>;
    /**
     * Required. Name of the AddressGroup resource. It matches pattern `projects/* /locations/{location}/addressGroups/`.
     */
    name?: string;
    /**
     * Output only. Server-defined fully-qualified URL for this resource.
     */
    selfLink?: string;
    /**
     * Required. The type of the Address Group. Possible values are "IPv4" or "IPV6".
     */
    type?: AddressGroupTypeEnum;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string;
}
/**
 * AddressGroup is a resource that specifies how a collection of IP/DNS used in Firewall Policy.
 */
export declare class AddressGroupInput extends SpeakeasyBase {
    /**
     * Required. Capacity of the Address Group
     */
    capacity?: number;
    /**
     * Optional. Free-text description of the resource.
     */
    description?: string;
    /**
     * Optional. List of items.
     */
    items?: string[];
    /**
     * Optional. Set of label tags associated with the AddressGroup resource.
     */
    labels?: Record<string, string>;
    /**
     * Required. Name of the AddressGroup resource. It matches pattern `projects/* /locations/{location}/addressGroups/`.
     */
    name?: string;
    /**
     * Required. The type of the Address Group. Possible values are "IPv4" or "IPV6".
     */
    type?: AddressGroupTypeEnum;
}
