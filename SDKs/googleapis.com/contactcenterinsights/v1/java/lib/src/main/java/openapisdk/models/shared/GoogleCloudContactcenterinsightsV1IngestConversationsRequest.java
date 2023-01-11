package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1IngestConversationsRequest
 * The request to ingest conversations.
**/
public class GoogleCloudContactcenterinsightsV1IngestConversationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversationConfig")
    public GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig conversationConfig;
    public GoogleCloudContactcenterinsightsV1IngestConversationsRequest withConversationConfig(GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig conversationConfig) {
        this.conversationConfig = conversationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsSource")
    public GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource gcsSource;
    public GoogleCloudContactcenterinsightsV1IngestConversationsRequest withGcsSource(GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource gcsSource) {
        this.gcsSource = gcsSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public GoogleCloudContactcenterinsightsV1IngestConversationsRequest withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transcriptObjectConfig")
    public GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig transcriptObjectConfig;
    public GoogleCloudContactcenterinsightsV1IngestConversationsRequest withTranscriptObjectConfig(GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig transcriptObjectConfig) {
        this.transcriptObjectConfig = transcriptObjectConfig;
        return this;
    }
}