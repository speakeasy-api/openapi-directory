import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroupConfig, InstanceGroupConfigInput } from "./instancegroupconfig";
export declare enum NodeGroupRolesEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    Driver = "DRIVER"
}
/**
 * Dataproc Node Group. The Dataproc NodeGroup resource is not related to the Dataproc NodeGroupAffinity resource.
 */
export declare class NodeGroupInput extends SpeakeasyBase {
    /**
     * Optional. Node group labels. Label keys must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty. If specified, they must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). The node group must have no more than 32 labelsn.
     */
    labels?: Record<string, string>;
    /**
     * The Node group resource name (https://aip.dev/122).
     */
    name?: string;
    /**
     * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
     */
    nodeGroupConfig?: InstanceGroupConfigInput;
    /**
     * Required. Node group roles.
     */
    roles?: NodeGroupRolesEnum[];
}
/**
 * Dataproc Node Group. The Dataproc NodeGroup resource is not related to the Dataproc NodeGroupAffinity resource.
 */
export declare class NodeGroup extends SpeakeasyBase {
    /**
     * Optional. Node group labels. Label keys must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty. If specified, they must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). The node group must have no more than 32 labelsn.
     */
    labels?: Record<string, string>;
    /**
     * The Node group resource name (https://aip.dev/122).
     */
    name?: string;
    /**
     * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
     */
    nodeGroupConfig?: InstanceGroupConfig;
    /**
     * Required. Node group roles.
     */
    roles?: NodeGroupRolesEnum[];
}
