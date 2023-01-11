package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImagesUploadResponse
 * Response for uploading an image.
**/
public class ImagesUploadResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Image image;
    public ImagesUploadResponse withImage(Image image) {
        this.image = image;
        return this;
    }
}