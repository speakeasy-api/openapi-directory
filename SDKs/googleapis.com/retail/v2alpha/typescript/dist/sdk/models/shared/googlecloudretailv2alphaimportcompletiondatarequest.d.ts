import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCompletionDataInputConfig } from "./googlecloudretailv2alphacompletiondatainputconfig";
/**
 * Request message for ImportCompletionData methods.
 */
export declare class GoogleCloudRetailV2alphaImportCompletionDataRequest extends SpeakeasyBase {
    /**
     * The input config source for completion data.
     */
    inputConfig?: GoogleCloudRetailV2alphaCompletionDataInputConfig;
    /**
     * Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`.
     */
    notificationPubsubTopic?: string;
}
