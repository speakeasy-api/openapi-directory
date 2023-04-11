import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A filter for the state of the instances in the instance group. Valid options are ALL or RUNNING. If you do not specify this parameter the list includes all instances regardless of their state.
 */
export declare enum InstanceGroupsListInstancesRequestInstanceStateEnum {
    All = "ALL",
    Running = "RUNNING"
}
export declare class InstanceGroupsListInstancesRequest extends SpeakeasyBase {
    /**
     * A filter for the state of the instances in the instance group. Valid options are ALL or RUNNING. If you do not specify this parameter the list includes all instances regardless of their state.
     */
    instanceState?: InstanceGroupsListInstancesRequestInstanceStateEnum;
}
