import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for the Acknowledge method.
 */
export declare class AcknowledgeRequest extends SpeakeasyBase {
    /**
     * The acknowledgment ID for the message being acknowledged. This was returned by the Pub/Sub system in the Pull response.
     */
    ackId?: string[];
    /**
     * The subscription whose message is being acknowledged.
     */
    subscription?: string;
}
