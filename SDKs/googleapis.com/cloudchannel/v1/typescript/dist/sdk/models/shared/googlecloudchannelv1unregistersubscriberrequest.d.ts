import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request Message for UnregisterSubscriber.
 */
export declare class GoogleCloudChannelV1UnregisterSubscriberRequest extends SpeakeasyBase {
    /**
     * Required. Service account to unregister from subscriber access to the topic.
     */
    serviceAccount?: string;
}
