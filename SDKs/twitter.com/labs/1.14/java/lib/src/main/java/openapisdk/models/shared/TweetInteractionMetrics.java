package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TweetInteractionMetrics
 * Interaction metrics for a Tweet.
**/
public class TweetInteractionMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impression_count")
    public Integer impressionCount;
    public TweetInteractionMetrics withImpressionCount(Integer impressionCount) {
        this.impressionCount = impressionCount;
        return this;
    }
    @JsonProperty("like_count")
    public Integer likeCount;
    public TweetInteractionMetrics withLikeCount(Integer likeCount) {
        this.likeCount = likeCount;
        return this;
    }
    @JsonProperty("quote_count")
    public Integer quoteCount;
    public TweetInteractionMetrics withQuoteCount(Integer quoteCount) {
        this.quoteCount = quoteCount;
        return this;
    }
    @JsonProperty("reply_count")
    public Integer replyCount;
    public TweetInteractionMetrics withReplyCount(Integer replyCount) {
        this.replyCount = replyCount;
        return this;
    }
    @JsonProperty("retweet_count")
    public Integer retweetCount;
    public TweetInteractionMetrics withRetweetCount(Integer retweetCount) {
        this.retweetCount = retweetCount;
        return this;
    }
}