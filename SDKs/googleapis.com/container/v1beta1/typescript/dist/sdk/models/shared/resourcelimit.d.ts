import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about amount of some resource in the cluster. For memory, value should be in GB.
 */
export declare class ResourceLimit extends SpeakeasyBase {
    /**
     * Maximum amount of the resource in the cluster.
     */
    maximum?: string;
    /**
     * Minimum amount of the resource in the cluster.
     */
    minimum?: string;
    /**
     * Resource name "cpu", "memory" or gpu-specific string.
     */
    resourceType?: string;
}
