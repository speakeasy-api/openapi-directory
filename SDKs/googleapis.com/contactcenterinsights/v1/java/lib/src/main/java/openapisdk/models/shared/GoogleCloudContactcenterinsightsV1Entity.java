package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudContactcenterinsightsV1Entity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudContactcenterinsightsV1Entity withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public GoogleCloudContactcenterinsightsV1Entity withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salience")
    public Float salience;
    public GoogleCloudContactcenterinsightsV1Entity withSalience(Float salience) {
        this.salience = salience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentiment")
    public GoogleCloudContactcenterinsightsV1SentimentData sentiment;
    public GoogleCloudContactcenterinsightsV1Entity withSentiment(GoogleCloudContactcenterinsightsV1SentimentData sentiment) {
        this.sentiment = sentiment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleCloudContactcenterinsightsV1EntityTypeEnum type;
    public GoogleCloudContactcenterinsightsV1Entity withType(GoogleCloudContactcenterinsightsV1EntityTypeEnum type) {
        this.type = type;
        return this;
    }
}