package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImagesListResponse
 * Response listing all images.
**/
public class ImagesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public Image[] images;
    public ImagesListResponse withImages(Image[] images) {
        this.images = images;
        return this;
    }
}