import { SpeakeasyBase } from "../../../internal/utils";
import { PubsubMessage } from "./pubsubmessage";
/**
 * Request for the TriggerPubsubExecution method.
 */
export declare class TriggerPubsubExecutionRequest extends SpeakeasyBase {
    /**
     * Required. LINT: LEGACY_NAMES The query parameter value for __GCP_CloudEventsMode, set by the Eventarc service when configuring triggers.
     */
    gcpCloudEventsMode?: string;
    /**
     * A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding [client library documentation](https://cloud.google.com/pubsub/docs/reference/libraries) for more information. See [quotas and limits] (https://cloud.google.com/pubsub/quotas) for more information about message limits.
     */
    message?: PubsubMessage;
    /**
     * Required. The subscription of the Pub/Sub push notification. Format: projects/{project}/subscriptions/{sub}
     */
    subscription?: string;
}
