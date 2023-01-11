package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PodcastSimple {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PodcastSimple withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PodcastSimple withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("earliest_pub_date_ms")
    public Long earliestPubDateMs;
    public PodcastSimple withEarliestPubDateMs(Long earliestPubDateMs) {
        this.earliestPubDateMs = earliestPubDateMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PodcastSimple withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicit_content")
    public Boolean explicitContent;
    public PodcastSimple withExplicitContent(Boolean explicitContent) {
        this.explicitContent = explicitContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extra")
    public PodcastExtraField extra;
    public PodcastSimple withExtra(PodcastExtraField extra) {
        this.extra = extra;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genre_ids")
    public Long[] genreIds;
    public PodcastSimple withGenreIds(Long[] genreIds) {
        this.genreIds = genreIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PodcastSimple withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public PodcastSimple withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_claimed")
    public Boolean isClaimed;
    public PodcastSimple withIsClaimed(Boolean isClaimed) {
        this.isClaimed = isClaimed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itunes_id")
    public Long itunesId;
    public PodcastSimple withItunesId(Long itunesId) {
        this.itunesId = itunesId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public PodcastSimple withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latest_pub_date_ms")
    public Long latestPubDateMs;
    public PodcastSimple withLatestPubDateMs(Long latestPubDateMs) {
        this.latestPubDateMs = latestPubDateMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listen_score")
    public Long listenScore;
    public PodcastSimple withListenScore(Long listenScore) {
        this.listenScore = listenScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listen_score_global_rank")
    public String listenScoreGlobalRank;
    public PodcastSimple withListenScoreGlobalRank(String listenScoreGlobalRank) {
        this.listenScoreGlobalRank = listenScoreGlobalRank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listennotes_url")
    public String listennotesUrl;
    public PodcastSimple withListennotesUrl(String listennotesUrl) {
        this.listennotesUrl = listennotesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("looking_for")
    public PodcastLookingForField lookingFor;
    public PodcastSimple withLookingFor(PodcastLookingForField lookingFor) {
        this.lookingFor = lookingFor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public PodcastSimple withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rss")
    public String rss;
    public PodcastSimple withRss(String rss) {
        this.rss = rss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;
    public PodcastSimple withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PodcastSimple withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_episodes")
    public Long totalEpisodes;
    public PodcastSimple withTotalEpisodes(Long totalEpisodes) {
        this.totalEpisodes = totalEpisodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PodcastTypeFieldEnum type;
    public PodcastSimple withType(PodcastTypeFieldEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public PodcastSimple withWebsite(String website) {
        this.website = website;
        return this;
    }
}