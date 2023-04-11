import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig } from "./googlecloudcontactcenterinsightsv1ingestconversationsrequestconversationconfig";
import { GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource } from "./googlecloudcontactcenterinsightsv1ingestconversationsrequestgcssource";
import { GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig } from "./googlecloudcontactcenterinsightsv1ingestconversationsrequesttranscriptobjectconfig";
/**
 * The request to ingest conversations.
 */
export declare class GoogleCloudContactcenterinsightsV1IngestConversationsRequest extends SpeakeasyBase {
    /**
     * Configuration that applies to all conversations.
     */
    conversationConfig?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig;
    /**
     * Configuration for Cloud Storage bucket sources.
     */
    gcsSource?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource;
    /**
     * Required. The parent resource for new conversations.
     */
    parent?: string;
    /**
     * Configuration for processing transcript objects.
     */
    transcriptObjectConfig?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig;
}
