package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PodcastFull {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PodcastFull withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PodcastFull withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("earliest_pub_date_ms")
    public Long earliestPubDateMs;
    public PodcastFull withEarliestPubDateMs(Long earliestPubDateMs) {
        this.earliestPubDateMs = earliestPubDateMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PodcastFull withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("episodes")
    public EpisodeMinimum[] episodes;
    public PodcastFull withEpisodes(EpisodeMinimum[] episodes) {
        this.episodes = episodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicit_content")
    public Boolean explicitContent;
    public PodcastFull withExplicitContent(Boolean explicitContent) {
        this.explicitContent = explicitContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extra")
    public PodcastExtraField extra;
    public PodcastFull withExtra(PodcastExtraField extra) {
        this.extra = extra;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genre_ids")
    public Long[] genreIds;
    public PodcastFull withGenreIds(Long[] genreIds) {
        this.genreIds = genreIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PodcastFull withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public PodcastFull withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_claimed")
    public Boolean isClaimed;
    public PodcastFull withIsClaimed(Boolean isClaimed) {
        this.isClaimed = isClaimed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itunes_id")
    public Long itunesId;
    public PodcastFull withItunesId(Long itunesId) {
        this.itunesId = itunesId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public PodcastFull withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latest_pub_date_ms")
    public Long latestPubDateMs;
    public PodcastFull withLatestPubDateMs(Long latestPubDateMs) {
        this.latestPubDateMs = latestPubDateMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listen_score")
    public Long listenScore;
    public PodcastFull withListenScore(Long listenScore) {
        this.listenScore = listenScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listen_score_global_rank")
    public String listenScoreGlobalRank;
    public PodcastFull withListenScoreGlobalRank(String listenScoreGlobalRank) {
        this.listenScoreGlobalRank = listenScoreGlobalRank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listennotes_url")
    public String listennotesUrl;
    public PodcastFull withListennotesUrl(String listennotesUrl) {
        this.listennotesUrl = listennotesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("looking_for")
    public PodcastLookingForField lookingFor;
    public PodcastFull withLookingFor(PodcastLookingForField lookingFor) {
        this.lookingFor = lookingFor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_episode_pub_date")
    public Long nextEpisodePubDate;
    public PodcastFull withNextEpisodePubDate(Long nextEpisodePubDate) {
        this.nextEpisodePubDate = nextEpisodePubDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public PodcastFull withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rss")
    public String rss;
    public PodcastFull withRss(String rss) {
        this.rss = rss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;
    public PodcastFull withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PodcastFull withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_episodes")
    public Long totalEpisodes;
    public PodcastFull withTotalEpisodes(Long totalEpisodes) {
        this.totalEpisodes = totalEpisodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PodcastTypeFieldEnum type;
    public PodcastFull withType(PodcastTypeFieldEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public PodcastFull withWebsite(String website) {
        this.website = website;
        return this;
    }
}