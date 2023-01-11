package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PodcastMinimum {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PodcastMinimum withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public PodcastMinimum withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listen_score")
    public Long listenScore;
    public PodcastMinimum withListenScore(Long listenScore) {
        this.listenScore = listenScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listen_score_global_rank")
    public String listenScoreGlobalRank;
    public PodcastMinimum withListenScoreGlobalRank(String listenScoreGlobalRank) {
        this.listenScoreGlobalRank = listenScoreGlobalRank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listennotes_url")
    public String listennotesUrl;
    public PodcastMinimum withListennotesUrl(String listennotesUrl) {
        this.listennotesUrl = listennotesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public PodcastMinimum withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;
    public PodcastMinimum withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PodcastMinimum withTitle(String title) {
        this.title = title;
        return this;
    }
}