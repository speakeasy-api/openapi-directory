import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Different types of resource supported.
 */
export declare enum ResourceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    GcpProject = "GCP_PROJECT",
    GcpResource = "GCP_RESOURCE",
    GcpSecretmanagerSecret = "GCP_SECRETMANAGER_SECRET",
    GcpSecretmanagerSecretVersion = "GCP_SECRETMANAGER_SECRET_VERSION"
}
/**
 * Resource definition
 */
export declare class Resource extends SpeakeasyBase {
    /**
     * Template to uniquely represent a GCP resource in a format IAM expects This is a template that can have references to other values provided in the config variable template.
     */
    pathTemplate?: string;
    /**
     * Different types of resource supported.
     */
    type?: ResourceTypeEnum;
}
