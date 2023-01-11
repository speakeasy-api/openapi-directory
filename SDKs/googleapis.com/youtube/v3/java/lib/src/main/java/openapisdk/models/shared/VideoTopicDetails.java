package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoTopicDetails
 * Freebase topic information related to the video.
**/
public class VideoTopicDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relevantTopicIds")
    public String[] relevantTopicIds;
    public VideoTopicDetails withRelevantTopicIds(String[] relevantTopicIds) {
        this.relevantTopicIds = relevantTopicIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicCategories")
    public String[] topicCategories;
    public VideoTopicDetails withTopicCategories(String[] topicCategories) {
        this.topicCategories = topicCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicIds")
    public String[] topicIds;
    public VideoTopicDetails withTopicIds(String[] topicIds) {
        this.topicIds = topicIds;
        return this;
    }
}