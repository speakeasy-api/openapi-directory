import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the service resource.
 */
export declare enum XpnResourceIdTypeEnum {
    Project = "PROJECT",
    XpnResourceTypeUnspecified = "XPN_RESOURCE_TYPE_UNSPECIFIED"
}
/**
 * Service resource (a.k.a service project) ID.
 */
export declare class XpnResourceId extends SpeakeasyBase {
    /**
     * The ID of the service resource. In the case of projects, this field supports project id (e.g., my-project-123) and project number (e.g. 12345678).
     */
    id?: string;
    /**
     * The type of the service resource.
     */
    type?: XpnResourceIdTypeEnum;
}
