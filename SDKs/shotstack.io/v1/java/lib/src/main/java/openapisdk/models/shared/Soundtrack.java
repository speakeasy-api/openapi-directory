package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Soundtrack
 * A music or audio file in mp3 format that plays for the duration of the rendered video or the length of the audio file, which ever is shortest.
**/
public class Soundtrack {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effect")
    public SoundtrackEffectEnum effect;
    public Soundtrack withEffect(SoundtrackEffectEnum effect) {
        this.effect = effect;
        return this;
    }
    @JsonProperty("src")
    public String src;
    public Soundtrack withSrc(String src) {
        this.src = src;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume")
    public Double volume;
    public Soundtrack withVolume(Double volume) {
        this.volume = volume;
        return this;
    }
}