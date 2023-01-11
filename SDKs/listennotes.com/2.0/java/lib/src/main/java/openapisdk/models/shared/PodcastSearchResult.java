package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PodcastSearchResult
 * When **type** is *podcast*.
**/
public class PodcastSearchResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description_highlighted")
    public String descriptionHighlighted;
    public PodcastSearchResult withDescriptionHighlighted(String descriptionHighlighted) {
        this.descriptionHighlighted = descriptionHighlighted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description_original")
    public String descriptionOriginal;
    public PodcastSearchResult withDescriptionOriginal(String descriptionOriginal) {
        this.descriptionOriginal = descriptionOriginal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("earliest_pub_date_ms")
    public Long earliestPubDateMs;
    public PodcastSearchResult withEarliestPubDateMs(Long earliestPubDateMs) {
        this.earliestPubDateMs = earliestPubDateMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PodcastSearchResult withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicit_content")
    public Boolean explicitContent;
    public PodcastSearchResult withExplicitContent(Boolean explicitContent) {
        this.explicitContent = explicitContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genre_ids")
    public Long[] genreIds;
    public PodcastSearchResult withGenreIds(Long[] genreIds) {
        this.genreIds = genreIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PodcastSearchResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public PodcastSearchResult withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itunes_id")
    public Long itunesId;
    public PodcastSearchResult withItunesId(Long itunesId) {
        this.itunesId = itunesId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latest_pub_date_ms")
    public Long latestPubDateMs;
    public PodcastSearchResult withLatestPubDateMs(Long latestPubDateMs) {
        this.latestPubDateMs = latestPubDateMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listen_score")
    public Long listenScore;
    public PodcastSearchResult withListenScore(Long listenScore) {
        this.listenScore = listenScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listen_score_global_rank")
    public String listenScoreGlobalRank;
    public PodcastSearchResult withListenScoreGlobalRank(String listenScoreGlobalRank) {
        this.listenScoreGlobalRank = listenScoreGlobalRank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listennotes_url")
    public String listennotesUrl;
    public PodcastSearchResult withListennotesUrl(String listennotesUrl) {
        this.listennotesUrl = listennotesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher_highlighted")
    public String publisherHighlighted;
    public PodcastSearchResult withPublisherHighlighted(String publisherHighlighted) {
        this.publisherHighlighted = publisherHighlighted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher_original")
    public String publisherOriginal;
    public PodcastSearchResult withPublisherOriginal(String publisherOriginal) {
        this.publisherOriginal = publisherOriginal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rss")
    public String rss;
    public PodcastSearchResult withRss(String rss) {
        this.rss = rss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;
    public PodcastSearchResult withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title_highlighted")
    public String titleHighlighted;
    public PodcastSearchResult withTitleHighlighted(String titleHighlighted) {
        this.titleHighlighted = titleHighlighted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title_original")
    public String titleOriginal;
    public PodcastSearchResult withTitleOriginal(String titleOriginal) {
        this.titleOriginal = titleOriginal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_episodes")
    public Long totalEpisodes;
    public PodcastSearchResult withTotalEpisodes(Long totalEpisodes) {
        this.totalEpisodes = totalEpisodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public PodcastSearchResult withWebsite(String website) {
        this.website = website;
        return this;
    }
}