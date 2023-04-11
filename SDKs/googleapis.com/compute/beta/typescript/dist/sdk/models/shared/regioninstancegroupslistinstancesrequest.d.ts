import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Instances in which state should be returned. Valid options are: 'ALL', 'RUNNING'. By default, it lists all instances.
 */
export declare enum RegionInstanceGroupsListInstancesRequestInstanceStateEnum {
    All = "ALL",
    Running = "RUNNING"
}
export declare class RegionInstanceGroupsListInstancesRequest extends SpeakeasyBase {
    /**
     * Instances in which state should be returned. Valid options are: 'ALL', 'RUNNING'. By default, it lists all instances.
     */
    instanceState?: RegionInstanceGroupsListInstancesRequestInstanceStateEnum;
    /**
     * Name of port user is interested in. It is optional. If it is set, only information about this ports will be returned. If it is not set, all the named ports will be returned. Always lists all instances.
     */
    portName?: string;
}
