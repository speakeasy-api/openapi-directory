package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ConversationLevelSentiment
 * One channel of conversation-level sentiment data.
**/
public class GoogleCloudContactcenterinsightsV1ConversationLevelSentiment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelTag")
    public Integer channelTag;
    public GoogleCloudContactcenterinsightsV1ConversationLevelSentiment withChannelTag(Integer channelTag) {
        this.channelTag = channelTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentimentData")
    public GoogleCloudContactcenterinsightsV1SentimentData sentimentData;
    public GoogleCloudContactcenterinsightsV1ConversationLevelSentiment withSentimentData(GoogleCloudContactcenterinsightsV1SentimentData sentimentData) {
        this.sentimentData = sentimentData;
        return this;
    }
}