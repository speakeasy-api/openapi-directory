package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelTopicDetails
 * Freebase topic information related to the channel.
**/
public class ChannelTopicDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicCategories")
    public String[] topicCategories;
    public ChannelTopicDetails withTopicCategories(String[] topicCategories) {
        this.topicCategories = topicCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicIds")
    public String[] topicIds;
    public ChannelTopicDetails withTopicIds(String[] topicIds) {
        this.topicIds = topicIds;
        return this;
    }
}