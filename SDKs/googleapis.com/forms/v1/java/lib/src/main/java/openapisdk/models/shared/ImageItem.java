package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageItem
 * An item containing an image.
**/
public class ImageItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Image image;
    public ImageItem withImage(Image image) {
        this.image = image;
        return this;
    }
}