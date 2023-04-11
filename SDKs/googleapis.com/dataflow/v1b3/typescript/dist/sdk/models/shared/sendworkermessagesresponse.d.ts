import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerMessageResponse } from "./workermessageresponse";
/**
 * The response to the worker messages.
 */
export declare class SendWorkerMessagesResponse extends SpeakeasyBase {
    /**
     * The servers response to the worker messages.
     */
    workerMessageResponses?: WorkerMessageResponse[];
}
