package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EpisodeSimple {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public String audio;
    public EpisodeSimple withAudio(String audio) {
        this.audio = audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_length_sec")
    public Long audioLengthSec;
    public EpisodeSimple withAudioLengthSec(Long audioLengthSec) {
        this.audioLengthSec = audioLengthSec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EpisodeSimple withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicit_content")
    public Boolean explicitContent;
    public EpisodeSimple withExplicitContent(Boolean explicitContent) {
        this.explicitContent = explicitContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EpisodeSimple withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public EpisodeSimple withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public EpisodeSimple withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listennotes_edit_url")
    public String listennotesEditUrl;
    public EpisodeSimple withListennotesEditUrl(String listennotesEditUrl) {
        this.listennotesEditUrl = listennotesEditUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listennotes_url")
    public String listennotesUrl;
    public EpisodeSimple withListennotesUrl(String listennotesUrl) {
        this.listennotesUrl = listennotesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maybe_audio_invalid")
    public Boolean maybeAudioInvalid;
    public EpisodeSimple withMaybeAudioInvalid(Boolean maybeAudioInvalid) {
        this.maybeAudioInvalid = maybeAudioInvalid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("podcast")
    public PodcastMinimum podcast;
    public EpisodeSimple withPodcast(PodcastMinimum podcast) {
        this.podcast = podcast;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pub_date_ms")
    public Long pubDateMs;
    public EpisodeSimple withPubDateMs(Long pubDateMs) {
        this.pubDateMs = pubDateMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;
    public EpisodeSimple withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public EpisodeSimple withTitle(String title) {
        this.title = title;
        return this;
    }
}