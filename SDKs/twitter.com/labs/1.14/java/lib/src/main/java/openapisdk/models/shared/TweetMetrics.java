package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TweetMetrics
 * Metrics for a Tweet.
**/
public class TweetMetrics {
    @JsonProperty("tweet")
    public TweetInteractionMetrics tweet;
    public TweetMetrics withTweet(TweetInteractionMetrics tweet) {
        this.tweet = tweet;
        return this;
    }
    @JsonProperty("tweet_id")
    public String tweetId;
    public TweetMetrics withTweetId(String tweetId) {
        this.tweetId = tweetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video")
    public VideoMetrics video;
    public TweetMetrics withVideo(VideoMetrics video) {
        this.video = video;
        return this;
    }
}