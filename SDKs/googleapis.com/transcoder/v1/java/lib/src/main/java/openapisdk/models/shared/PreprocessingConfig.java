package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreprocessingConfig
 * Preprocessing configurations.
**/
public class PreprocessingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public Audio audio;
    public PreprocessingConfig withAudio(Audio audio) {
        this.audio = audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public Color color;
    public PreprocessingConfig withColor(Color color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crop")
    public Crop crop;
    public PreprocessingConfig withCrop(Crop crop) {
        this.crop = crop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deblock")
    public Deblock deblock;
    public PreprocessingConfig withDeblock(Deblock deblock) {
        this.deblock = deblock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deinterlace")
    public Deinterlace deinterlace;
    public PreprocessingConfig withDeinterlace(Deinterlace deinterlace) {
        this.deinterlace = deinterlace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("denoise")
    public Denoise denoise;
    public PreprocessingConfig withDenoise(Denoise denoise) {
        this.denoise = denoise;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pad")
    public Pad pad;
    public PreprocessingConfig withPad(Pad pad) {
        this.pad = pad;
        return this;
    }
}