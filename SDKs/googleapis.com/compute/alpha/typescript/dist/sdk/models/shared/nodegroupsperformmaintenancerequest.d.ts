import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodeGroupsPerformMaintenanceRequest extends SpeakeasyBase {
    /**
     * [Required] List of nodes affected by the call.
     */
    nodes?: string[];
    /**
     * The start time of the schedule. The timestamp is an RFC3339 string.
     */
    startTime?: string;
}
