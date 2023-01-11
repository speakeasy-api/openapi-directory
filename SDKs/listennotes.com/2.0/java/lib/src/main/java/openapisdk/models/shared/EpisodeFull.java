package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EpisodeFull {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public String audio;
    public EpisodeFull withAudio(String audio) {
        this.audio = audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_length_sec")
    public Long audioLengthSec;
    public EpisodeFull withAudioLengthSec(Long audioLengthSec) {
        this.audioLengthSec = audioLengthSec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EpisodeFull withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicit_content")
    public Boolean explicitContent;
    public EpisodeFull withExplicitContent(Boolean explicitContent) {
        this.explicitContent = explicitContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EpisodeFull withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public EpisodeFull withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public EpisodeFull withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listennotes_edit_url")
    public String listennotesEditUrl;
    public EpisodeFull withListennotesEditUrl(String listennotesEditUrl) {
        this.listennotesEditUrl = listennotesEditUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listennotes_url")
    public String listennotesUrl;
    public EpisodeFull withListennotesUrl(String listennotesUrl) {
        this.listennotesUrl = listennotesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maybe_audio_invalid")
    public Boolean maybeAudioInvalid;
    public EpisodeFull withMaybeAudioInvalid(Boolean maybeAudioInvalid) {
        this.maybeAudioInvalid = maybeAudioInvalid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("podcast")
    public PodcastSimple podcast;
    public EpisodeFull withPodcast(PodcastSimple podcast) {
        this.podcast = podcast;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pub_date_ms")
    public Long pubDateMs;
    public EpisodeFull withPubDateMs(Long pubDateMs) {
        this.pubDateMs = pubDateMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;
    public EpisodeFull withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public EpisodeFull withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transcript")
    public String transcript;
    public EpisodeFull withTranscript(String transcript) {
        this.transcript = transcript;
        return this;
    }
}