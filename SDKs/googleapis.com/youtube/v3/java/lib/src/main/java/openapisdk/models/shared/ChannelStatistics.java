package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelStatistics
 * Statistics about a channel: number of subscribers, number of videos in the channel, etc.
**/
public class ChannelStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentCount")
    public String commentCount;
    public ChannelStatistics withCommentCount(String commentCount) {
        this.commentCount = commentCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiddenSubscriberCount")
    public Boolean hiddenSubscriberCount;
    public ChannelStatistics withHiddenSubscriberCount(Boolean hiddenSubscriberCount) {
        this.hiddenSubscriberCount = hiddenSubscriberCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriberCount")
    public String subscriberCount;
    public ChannelStatistics withSubscriberCount(String subscriberCount) {
        this.subscriberCount = subscriberCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoCount")
    public String videoCount;
    public ChannelStatistics withVideoCount(String videoCount) {
        this.videoCount = videoCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewCount")
    public String viewCount;
    public ChannelStatistics withViewCount(String viewCount) {
        this.viewCount = viewCount;
        return this;
    }
}