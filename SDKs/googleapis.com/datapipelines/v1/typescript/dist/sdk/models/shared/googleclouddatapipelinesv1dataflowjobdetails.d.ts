import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatapipelinesV1SDKVersion } from "./googleclouddatapipelinesv1sdkversion";
/**
 * Pipeline job details specific to the Dataflow API. This is encapsulated here to allow for more executors to store their specific details separately.
 */
export declare class GoogleCloudDatapipelinesV1DataflowJobDetails extends SpeakeasyBase {
    /**
     * Output only. The current number of workers used to run the jobs. Only set to a value if the job is still running.
     */
    currentWorkers?: number;
    /**
     * Cached version of all the metrics of interest for the job. This value gets stored here when the job is terminated. As long as the job is running, this field is populated from the Dataflow API.
     */
    resourceInfo?: Record<string, number>;
    /**
     * The version of the SDK used to run the job.
     */
    sdkVersion?: GoogleCloudDatapipelinesV1SDKVersion;
}
