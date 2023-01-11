package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageItemInput
 * An item containing an image.
**/
public class ImageItemInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public ImageInput image;
    public ImageItemInput withImage(ImageInput image) {
        this.image = image;
        return this;
    }
}