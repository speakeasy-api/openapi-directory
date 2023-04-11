import { SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorConfig } from "./acceleratorconfig";
import { LocalDisk } from "./localdisk";
import { NodeTemplateNodeTypeFlexibility } from "./nodetemplatenodetypeflexibility";
import { ServerBinding } from "./serverbinding";
/**
 * CPU overcommit.
 */
export declare enum NodeTemplateCpuOvercommitTypeEnum {
    CpuOvercommitTypeUnspecified = "CPU_OVERCOMMIT_TYPE_UNSPECIFIED",
    Enabled = "ENABLED",
    None = "NONE"
}
/**
 * [Output Only] The status of the node template. One of the following values: CREATING, READY, and DELETING.
 */
export declare enum NodeTemplateStatusEnum {
    Creating = "CREATING",
    Deleting = "DELETING",
    Invalid = "INVALID",
    Ready = "READY"
}
/**
 * Represent a sole-tenant Node Template resource. You can use a template to define properties for nodes in a node group. For more information, read Creating node groups and instances.
 */
export declare class NodeTemplate extends SpeakeasyBase {
    accelerators?: AcceleratorConfig[];
    /**
     * CPU overcommit.
     */
    cpuOvercommitType?: NodeTemplateCpuOvercommitTypeEnum;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    disks?: LocalDisk[];
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] The type of the resource. Always compute#nodeTemplate for node templates.
     */
    kind?: string;
    /**
     * The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * Labels to use for node affinity, which will be used in instance scheduling.
     */
    nodeAffinityLabels?: Record<string, string>;
    /**
     * The node type to use for nodes group that are created from this template.
     */
    nodeType?: string;
    nodeTypeFlexibility?: NodeTemplateNodeTypeFlexibility;
    /**
     * [Output Only] The name of the region where the node template resides, such as us-central1.
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource with the resource id.
     */
    selfLinkWithId?: string;
    serverBinding?: ServerBinding;
    /**
     * [Output Only] The status of the node template. One of the following values: CREATING, READY, and DELETING.
     */
    status?: NodeTemplateStatusEnum;
    /**
     * [Output Only] An optional, human-readable explanation of the status.
     */
    statusMessage?: string;
}
