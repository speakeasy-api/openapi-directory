package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Image
 * An image.
**/
public class Image {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrl")
    public String imageUrl;
    public Image withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ImageStatusEnum status;
    public Image withStatus(ImageStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ImageTypeEnum type;
    public Image withType(ImageTypeEnum type) {
        this.type = type;
        return this;
    }
}