import { SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorConfig } from "./acceleratorconfig";
import { InstanceConsumptionData } from "./instanceconsumptiondata";
import { InstanceConsumptionInfo } from "./instanceconsumptioninfo";
import { LocalDisk } from "./localdisk";
import { ServerBinding } from "./serverbinding";
import { UpcomingMaintenance } from "./upcomingmaintenance";
/**
 * CPU overcommit.
 */
export declare enum NodeGroupNodeCpuOvercommitTypeEnum {
    CpuOvercommitTypeUnspecified = "CPU_OVERCOMMIT_TYPE_UNSPECIFIED",
    Enabled = "ENABLED",
    None = "NONE"
}
export declare enum NodeGroupNodeStatusEnum {
    Creating = "CREATING",
    Deleting = "DELETING",
    Invalid = "INVALID",
    Ready = "READY",
    Repairing = "REPAIRING"
}
export declare class NodeGroupNode extends SpeakeasyBase {
    /**
     * Accelerators for this node.
     */
    accelerators?: AcceleratorConfig[];
    consumedResources?: InstanceConsumptionInfo;
    /**
     * CPU overcommit.
     */
    cpuOvercommitType?: NodeGroupNodeCpuOvercommitTypeEnum;
    /**
     * Local disk configurations.
     */
    disks?: LocalDisk[];
    /**
     * Instance data that shows consumed resources on the node.
     */
    instanceConsumptionData?: InstanceConsumptionData[];
    /**
     * Instances scheduled on this node.
     */
    instances?: string[];
    /**
     * The name of the node.
     */
    name?: string;
    /**
     * The type of this node.
     */
    nodeType?: string;
    /**
     * [Output Only] Reserved for future use.
     */
    satisfiesPzs?: boolean;
    serverBinding?: ServerBinding;
    /**
     * Server ID associated with this node.
     */
    serverId?: string;
    status?: NodeGroupNodeStatusEnum;
    totalResources?: InstanceConsumptionInfo;
    /**
     * Upcoming Maintenance notification information.
     */
    upcomingMaintenance?: UpcomingMaintenance;
}
