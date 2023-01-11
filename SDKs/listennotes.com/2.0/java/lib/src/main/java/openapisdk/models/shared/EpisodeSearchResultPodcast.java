package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EpisodeSearchResultPodcast
 * The podcast that this episode belongs to.
**/
public class EpisodeSearchResultPodcast {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genre_ids")
    public Long[] genreIds;
    public EpisodeSearchResultPodcast withGenreIds(Long[] genreIds) {
        this.genreIds = genreIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EpisodeSearchResultPodcast withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public EpisodeSearchResultPodcast withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listen_score")
    public Long listenScore;
    public EpisodeSearchResultPodcast withListenScore(Long listenScore) {
        this.listenScore = listenScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listen_score_global_rank")
    public String listenScoreGlobalRank;
    public EpisodeSearchResultPodcast withListenScoreGlobalRank(String listenScoreGlobalRank) {
        this.listenScoreGlobalRank = listenScoreGlobalRank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listennotes_url")
    public String listennotesUrl;
    public EpisodeSearchResultPodcast withListennotesUrl(String listennotesUrl) {
        this.listennotesUrl = listennotesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher_highlighted")
    public String publisherHighlighted;
    public EpisodeSearchResultPodcast withPublisherHighlighted(String publisherHighlighted) {
        this.publisherHighlighted = publisherHighlighted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher_original")
    public String publisherOriginal;
    public EpisodeSearchResultPodcast withPublisherOriginal(String publisherOriginal) {
        this.publisherOriginal = publisherOriginal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;
    public EpisodeSearchResultPodcast withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title_highlighted")
    public String titleHighlighted;
    public EpisodeSearchResultPodcast withTitleHighlighted(String titleHighlighted) {
        this.titleHighlighted = titleHighlighted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title_original")
    public String titleOriginal;
    public EpisodeSearchResultPodcast withTitleOriginal(String titleOriginal) {
        this.titleOriginal = titleOriginal;
        return this;
    }
}