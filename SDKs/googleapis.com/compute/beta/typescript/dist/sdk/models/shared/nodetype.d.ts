import { SpeakeasyBase } from "../../../internal/utils";
import { DeprecationStatus } from "./deprecationstatus";
/**
 * Represent a sole-tenant Node Type resource. Each node within a node group must have a node type. A node type specifies the total amount of cores and memory for that node. Currently, the only available node type is n1-node-96-624 node type that has 96 vCPUs and 624 GB of memory, available in multiple zones. For more information read Node types.
 */
export declare class NodeType extends SpeakeasyBase {
    /**
     * [Output Only] The CPU platform used by this node type.
     */
    cpuPlatform?: string;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * Deprecation status for a public resource.
     */
    deprecated?: DeprecationStatus;
    /**
     * [Output Only] An optional textual description of the resource.
     */
    description?: string;
    /**
     * [Output Only] The number of virtual CPUs that are available to the node type.
     */
    guestCpus?: number;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] The type of the resource. Always compute#nodeType for node types.
     */
    kind?: string;
    /**
     * [Output Only] Local SSD available to the node type, defined in GB.
     */
    localSsdGb?: number;
    /**
     * [Output Only] The amount of physical memory available to the node type, defined in MB.
     */
    memoryMb?: number;
    /**
     * [Output Only] Name of the resource.
     */
    name?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] The name of the zone where the node type resides, such as us-central1-a.
     */
    zone?: string;
}
