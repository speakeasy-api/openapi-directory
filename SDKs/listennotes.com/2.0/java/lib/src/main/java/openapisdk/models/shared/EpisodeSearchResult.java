package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EpisodeSearchResult
 * When **type** is *episode*.
**/
public class EpisodeSearchResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public String audio;
    public EpisodeSearchResult withAudio(String audio) {
        this.audio = audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_length_sec")
    public Long audioLengthSec;
    public EpisodeSearchResult withAudioLengthSec(Long audioLengthSec) {
        this.audioLengthSec = audioLengthSec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description_highlighted")
    public String descriptionHighlighted;
    public EpisodeSearchResult withDescriptionHighlighted(String descriptionHighlighted) {
        this.descriptionHighlighted = descriptionHighlighted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description_original")
    public String descriptionOriginal;
    public EpisodeSearchResult withDescriptionOriginal(String descriptionOriginal) {
        this.descriptionOriginal = descriptionOriginal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicit_content")
    public Boolean explicitContent;
    public EpisodeSearchResult withExplicitContent(Boolean explicitContent) {
        this.explicitContent = explicitContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EpisodeSearchResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public EpisodeSearchResult withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itunes_id")
    public Long itunesId;
    public EpisodeSearchResult withItunesId(Long itunesId) {
        this.itunesId = itunesId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public EpisodeSearchResult withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listennotes_url")
    public String listennotesUrl;
    public EpisodeSearchResult withListennotesUrl(String listennotesUrl) {
        this.listennotesUrl = listennotesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("podcast")
    public EpisodeSearchResultPodcast podcast;
    public EpisodeSearchResult withPodcast(EpisodeSearchResultPodcast podcast) {
        this.podcast = podcast;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pub_date_ms")
    public Long pubDateMs;
    public EpisodeSearchResult withPubDateMs(Long pubDateMs) {
        this.pubDateMs = pubDateMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rss")
    public String rss;
    public EpisodeSearchResult withRss(String rss) {
        this.rss = rss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;
    public EpisodeSearchResult withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title_highlighted")
    public String titleHighlighted;
    public EpisodeSearchResult withTitleHighlighted(String titleHighlighted) {
        this.titleHighlighted = titleHighlighted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title_original")
    public String titleOriginal;
    public EpisodeSearchResult withTitleOriginal(String titleOriginal) {
        this.titleOriginal = titleOriginal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transcripts_highlighted")
    public String[] transcriptsHighlighted;
    public EpisodeSearchResult withTranscriptsHighlighted(String[] transcriptsHighlighted) {
        this.transcriptsHighlighted = transcriptsHighlighted;
        return this;
    }
}