import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerMessage } from "./workermessage";
/**
 * A request for sending worker messages to the service.
 */
export declare class SendWorkerMessagesRequest extends SpeakeasyBase {
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job.
     */
    location?: string;
    /**
     * The WorkerMessages to send.
     */
    workerMessages?: WorkerMessage[];
}
