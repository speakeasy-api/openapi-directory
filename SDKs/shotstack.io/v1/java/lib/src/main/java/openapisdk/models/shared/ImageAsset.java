package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageAsset
 * The ImageAsset is used to create video from images to compose an image. The src must be a publicly accessible URL to an image resource such as a jpg or png file.
**/
public class ImageAsset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crop")
    public Crop crop;
    public ImageAsset withCrop(Crop crop) {
        this.crop = crop;
        return this;
    }
    @JsonProperty("src")
    public String src;
    public ImageAsset withSrc(String src) {
        this.src = src;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ImageAsset withType(String type) {
        this.type = type;
        return this;
    }
}