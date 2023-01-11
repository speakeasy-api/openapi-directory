package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EpisodeMinimum {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public String audio;
    public EpisodeMinimum withAudio(String audio) {
        this.audio = audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_length_sec")
    public Long audioLengthSec;
    public EpisodeMinimum withAudioLengthSec(Long audioLengthSec) {
        this.audioLengthSec = audioLengthSec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EpisodeMinimum withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicit_content")
    public Boolean explicitContent;
    public EpisodeMinimum withExplicitContent(Boolean explicitContent) {
        this.explicitContent = explicitContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EpisodeMinimum withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public EpisodeMinimum withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public EpisodeMinimum withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listennotes_edit_url")
    public String listennotesEditUrl;
    public EpisodeMinimum withListennotesEditUrl(String listennotesEditUrl) {
        this.listennotesEditUrl = listennotesEditUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listennotes_url")
    public String listennotesUrl;
    public EpisodeMinimum withListennotesUrl(String listennotesUrl) {
        this.listennotesUrl = listennotesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maybe_audio_invalid")
    public Boolean maybeAudioInvalid;
    public EpisodeMinimum withMaybeAudioInvalid(Boolean maybeAudioInvalid) {
        this.maybeAudioInvalid = maybeAudioInvalid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pub_date_ms")
    public Long pubDateMs;
    public EpisodeMinimum withPubDateMs(Long pubDateMs) {
        this.pubDateMs = pubDateMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;
    public EpisodeMinimum withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public EpisodeMinimum withTitle(String title) {
        this.title = title;
        return this;
    }
}