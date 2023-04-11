import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Repair action to take on specified resources of the node pool.
 */
export declare enum NodePoolRepairActionEnum {
    RepairActionUnspecified = "REPAIR_ACTION_UNSPECIFIED",
    Delete = "DELETE"
}
/**
 * indicating a list of workers of same type
 */
export declare class NodePool extends SpeakeasyBase {
    /**
     * Required. A unique id of the node pool. Primary and Secondary workers can be specified using special reserved ids PRIMARY_WORKER_POOL and SECONDARY_WORKER_POOL respectively. Aux node pools can be referenced using corresponding pool id.
     */
    id?: string;
    /**
     * Name of instances to be repaired. These instances must belong to specified node pool.
     */
    instanceNames?: string[];
    /**
     * Required. Repair action to take on specified resources of the node pool.
     */
    repairAction?: NodePoolRepairActionEnum;
}
