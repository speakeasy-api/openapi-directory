import { SpeakeasyBase } from "../../../internal/utils";
import { PullResponse } from "./pullresponse";
/**
 * Response for the PullBatch method.
 */
export declare class PullBatchResponse extends SpeakeasyBase {
    /**
     * Received Pub/Sub messages or status events. The Pub/Sub system will return zero messages if there are no more messages available in the backlog. The Pub/Sub system may return fewer than the max_events requested even if there are more messages available in the backlog.
     */
    pullResponses?: PullResponse[];
}
