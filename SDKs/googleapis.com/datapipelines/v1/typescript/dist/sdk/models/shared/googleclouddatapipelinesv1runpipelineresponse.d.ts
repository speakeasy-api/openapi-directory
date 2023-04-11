import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatapipelinesV1Job } from "./googleclouddatapipelinesv1job";
/**
 * Response message for RunPipeline
 */
export declare class GoogleCloudDatapipelinesV1RunPipelineResponse extends SpeakeasyBase {
    /**
     * Definition of the job information maintained by the pipeline. Fields in this entity are retrieved from the executor API (e.g. Dataflow API).
     */
    job?: GoogleCloudDatapipelinesV1Job;
}
