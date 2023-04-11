import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for the PullBatch method.
 */
export declare class PullBatchRequest extends SpeakeasyBase {
    /**
     * The maximum number of PubsubEvents returned for this request. The Pub/Sub system may return fewer than the number of events specified.
     */
    maxEvents?: number;
    /**
     * If this is specified as true the system will respond immediately even if it is not able to return a message in the Pull response. Otherwise the system is allowed to wait until at least one message is available rather than returning no messages. The client may cancel the request if it does not wish to wait any longer for the response.
     */
    returnImmediately?: boolean;
    /**
     * The subscription from which messages should be pulled.
     */
    subscription?: string;
}
