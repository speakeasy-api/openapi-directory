package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig
 * Configuration for processing transcript objects.
**/
public class GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medium")
    public GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigMediumEnum medium;
    public GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig withMedium(GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigMediumEnum medium) {
        this.medium = medium;
        return this;
    }
}