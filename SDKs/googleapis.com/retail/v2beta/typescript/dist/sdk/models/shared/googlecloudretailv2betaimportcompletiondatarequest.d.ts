import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCompletionDataInputConfig } from "./googlecloudretailv2betacompletiondatainputconfig";
/**
 * Request message for ImportCompletionData methods.
 */
export declare class GoogleCloudRetailV2betaImportCompletionDataRequest extends SpeakeasyBase {
    /**
     * The input config source for completion data.
     */
    inputConfig?: GoogleCloudRetailV2betaCompletionDataInputConfig;
    /**
     * Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`.
     */
    notificationPubsubTopic?: string;
}
