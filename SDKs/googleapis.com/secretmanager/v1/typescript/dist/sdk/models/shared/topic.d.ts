import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Pub/Sub topic which Secret Manager will publish to when control plane events occur on this secret.
 */
export declare class Topic extends SpeakeasyBase {
    /**
     * Required. The resource name of the Pub/Sub topic that will be published to, in the following format: `projects/* /topics/*`. For publication to succeed, the Secret Manager P4SA must have `pubsub.publisher` permissions on the topic.
     */
    name?: string;
}
