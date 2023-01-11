package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ImageCreateRequest
 * Request to upload an image
**/
public class ImageCreateRequest {
    @JsonProperty("base64_image")
    public String base64Image;
    public ImageCreateRequest withBase64Image(String base64Image) {
        this.base64Image = base64Image;
        return this;
    }
}