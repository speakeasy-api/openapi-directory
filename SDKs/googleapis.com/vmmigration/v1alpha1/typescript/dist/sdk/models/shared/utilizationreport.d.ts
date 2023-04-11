import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { VmUtilizationInfo, VmUtilizationInfoInput } from "./vmutilizationinfo";
/**
 * Output only. Current state of the report.
 */
export declare enum UtilizationReportStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * Time frame of the report.
 */
export declare enum UtilizationReportTimeFrameEnum {
    TimeFrameUnspecified = "TIME_FRAME_UNSPECIFIED",
    Week = "WEEK",
    Month = "MONTH",
    Year = "YEAR"
}
/**
 * Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
 */
export declare class UtilizationReport extends SpeakeasyBase {
    /**
     * Output only. The time the report was created (this refers to the time of the request, not the time the report creation completed).
     */
    createTime?: string;
    /**
     * The report display name, as assigned by the user.
     */
    displayName?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * Output only. The point in time when the time frame ends. Notice that the time frame is counted backwards. For instance if the "frame_end_time" value is 2021/01/20 and the time frame is WEEK then the report covers the week between 2021/01/20 and 2021/01/14.
     */
    frameEndTime?: string;
    /**
     * Output only. The report unique name.
     */
    name?: string;
    /**
     * Output only. Current state of the report.
     */
    state?: UtilizationReportStateEnum;
    /**
     * Output only. The time the state was last set.
     */
    stateTime?: string;
    /**
     * Time frame of the report.
     */
    timeFrame?: UtilizationReportTimeFrameEnum;
    /**
     * Output only. Total number of VMs included in the report.
     */
    vmCount?: number;
    /**
     * List of utilization information per VM. When sent as part of the request, the "vm_id" field is used in order to specify which VMs to include in the report. In that case all other fields are ignored.
     */
    vms?: VmUtilizationInfo[];
    /**
     * Output only. Total number of VMs included in the report.
     */
    vmsCount?: number;
}
/**
 * Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
 */
export declare class UtilizationReportInput extends SpeakeasyBase {
    /**
     * The report display name, as assigned by the user.
     */
    displayName?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * Time frame of the report.
     */
    timeFrame?: UtilizationReportTimeFrameEnum;
    /**
     * List of utilization information per VM. When sent as part of the request, the "vm_id" field is used in order to specify which VMs to include in the report. In that case all other fields are ignored.
     */
    vms?: VmUtilizationInfoInput[];
}
