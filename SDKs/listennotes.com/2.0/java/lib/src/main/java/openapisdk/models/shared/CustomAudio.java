package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomAudio
 * A custom audio in a playlist, which is a type of playlist item.
**/
public class CustomAudio {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public String audio;
    public CustomAudio withAudio(String audio) {
        this.audio = audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_length_sec")
    public Long audioLengthSec;
    public CustomAudio withAudioLengthSec(Long audioLengthSec) {
        this.audioLengthSec = audioLengthSec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public CustomAudio withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pub_date_ms")
    public Long pubDateMs;
    public CustomAudio withPubDateMs(Long pubDateMs) {
        this.pubDateMs = pubDateMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;
    public CustomAudio withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public CustomAudio withTitle(String title) {
        this.title = title;
        return this;
    }
}