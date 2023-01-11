package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioAsset
 * The AudioAsset is used to add sound effects and audio at specific intervals on the timeline. The src must be a publicly accessible URL to an audio resource such  as an mp3 file.
**/
public class AudioAsset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effect")
    public AudioAssetEffectEnum effect;
    public AudioAsset withEffect(AudioAssetEffectEnum effect) {
        this.effect = effect;
        return this;
    }
    @JsonProperty("src")
    public String src;
    public AudioAsset withSrc(String src) {
        this.src = src;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trim")
    public Double trim;
    public AudioAsset withTrim(Double trim) {
        this.trim = trim;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public AudioAsset withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume")
    public Double volume;
    public AudioAsset withVolume(Double volume) {
        this.volume = volume;
        return this;
    }
}