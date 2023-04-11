import { SpeakeasyBase } from "../../../internal/utils";
import { PushConfig } from "./pushconfig";
/**
 * A subscription resource.
 */
export declare class Subscription extends SpeakeasyBase {
    /**
     * For either push or pull delivery, the value is the maximum time after a subscriber receives a message before the subscriber should acknowledge or Nack the message. If the Ack deadline for a message passes without an Ack or a Nack, the Pub/Sub system will eventually redeliver the message. If a subscriber acknowledges after the deadline, the Pub/Sub system may accept the Ack, but it is possible that the message has been already delivered again. Multiple Acks to the message are allowed and will succeed. For push delivery, this value is used to set the request timeout for the call to the push endpoint. For pull delivery, this value is used as the initial value for the Ack deadline. It may be overridden for each message using its corresponding ack_id with ModifyAckDeadline. While a message is outstanding (i.e. it has been delivered to a pull subscriber and the subscriber has not yet Acked or Nacked), the Pub/Sub system will not deliver that message to another pull subscriber (on a best-effort basis).
     */
    ackDeadlineSeconds?: number;
    /**
     * Name of the subscription.
     */
    name?: string;
    /**
     * Configuration for a push delivery endpoint.
     */
    pushConfig?: PushConfig;
    /**
     * The name of the topic from which this subscription is receiving messages.
     */
    topic?: string;
}
