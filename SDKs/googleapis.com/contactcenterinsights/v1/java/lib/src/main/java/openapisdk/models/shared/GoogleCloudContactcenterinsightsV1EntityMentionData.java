package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1EntityMentionData
 * The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation.
**/
public class GoogleCloudContactcenterinsightsV1EntityMentionData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityUniqueId")
    public String entityUniqueId;
    public GoogleCloudContactcenterinsightsV1EntityMentionData withEntityUniqueId(String entityUniqueId) {
        this.entityUniqueId = entityUniqueId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentiment")
    public GoogleCloudContactcenterinsightsV1SentimentData sentiment;
    public GoogleCloudContactcenterinsightsV1EntityMentionData withSentiment(GoogleCloudContactcenterinsightsV1SentimentData sentiment) {
        this.sentiment = sentiment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum type;
    public GoogleCloudContactcenterinsightsV1EntityMentionData withType(GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum type) {
        this.type = type;
        return this;
    }
}