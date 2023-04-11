import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatapipelinesV1DataflowJobDetails } from "./googleclouddatapipelinesv1dataflowjobdetails";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * The current state of the job.
 */
export declare enum GoogleCloudDatapipelinesV1JobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    StatePending = "STATE_PENDING",
    StateRunning = "STATE_RUNNING",
    StateDone = "STATE_DONE",
    StateFailed = "STATE_FAILED",
    StateCancelled = "STATE_CANCELLED"
}
/**
 * Definition of the job information maintained by the pipeline. Fields in this entity are retrieved from the executor API (e.g. Dataflow API).
 */
export declare class GoogleCloudDatapipelinesV1Job extends SpeakeasyBase {
    /**
     * Output only. The time of job creation.
     */
    createTime?: string;
    /**
     * Pipeline job details specific to the Dataflow API. This is encapsulated here to allow for more executors to store their specific details separately.
     */
    dataflowJobDetails?: GoogleCloudDatapipelinesV1DataflowJobDetails;
    /**
     * Output only. The time of job termination. This is absent if the job is still running.
     */
    endTime?: string;
    /**
     * Output only. The internal ID for the job.
     */
    id?: string;
    /**
     * Required. The fully qualified resource name for the job.
     */
    name?: string;
    /**
     * The current state of the job.
     */
    state?: GoogleCloudDatapipelinesV1JobStateEnum;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    status?: GoogleRpcStatus;
}
