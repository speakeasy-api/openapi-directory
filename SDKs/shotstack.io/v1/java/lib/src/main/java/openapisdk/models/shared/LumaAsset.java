package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LumaAsset
 * The LumaAsset is used to create luma matte masks, transitions and effects between other assets. A luma matte is a grey scale image or animated video where the black areas are transparent and the white areas solid. The luma matte animation should be provided as an mp4 video file. The src must be a publicly accessible URL to the file.
**/
public class LumaAsset {
    @JsonProperty("src")
    public String src;
    public LumaAsset withSrc(String src) {
        this.src = src;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trim")
    public Double trim;
    public LumaAsset withTrim(Double trim) {
        this.trim = trim;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public LumaAsset withType(String type) {
        this.type = type;
        return this;
    }
}