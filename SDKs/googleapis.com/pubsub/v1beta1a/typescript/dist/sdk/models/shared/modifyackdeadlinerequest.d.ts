import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for the ModifyAckDeadline method.
 */
export declare class ModifyAckDeadlineRequest extends SpeakeasyBase {
    /**
     * The new ack deadline with respect to the time this request was sent to the Pub/Sub system. Must be >= 0. For example, if the value is 10, the new ack deadline will expire 10 seconds after the ModifyAckDeadline call was made. Specifying zero may immediately make the message available for another pull request.
     */
    ackDeadlineSeconds?: number;
    /**
     * The acknowledgment ID. Either this or ack_ids must be populated, not both.
     */
    ackId?: string;
    /**
     * List of acknowledgment IDs. Either this field or ack_id should be populated, not both.
     */
    ackIds?: string[];
    /**
     * Next Index: 5 The name of the subscription from which messages are being pulled.
     */
    subscription?: string;
}
