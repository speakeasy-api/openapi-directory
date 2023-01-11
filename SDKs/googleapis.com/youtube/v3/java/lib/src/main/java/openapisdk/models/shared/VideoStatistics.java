package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoStatistics
 * Statistics about the video, such as the number of times the video was viewed or liked.
**/
public class VideoStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentCount")
    public String commentCount;
    public VideoStatistics withCommentCount(String commentCount) {
        this.commentCount = commentCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dislikeCount")
    public String dislikeCount;
    public VideoStatistics withDislikeCount(String dislikeCount) {
        this.dislikeCount = dislikeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("favoriteCount")
    public String favoriteCount;
    public VideoStatistics withFavoriteCount(String favoriteCount) {
        this.favoriteCount = favoriteCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("likeCount")
    public String likeCount;
    public VideoStatistics withLikeCount(String likeCount) {
        this.likeCount = likeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewCount")
    public String viewCount;
    public VideoStatistics withViewCount(String viewCount) {
        this.viewCount = viewCount;
        return this;
    }
}