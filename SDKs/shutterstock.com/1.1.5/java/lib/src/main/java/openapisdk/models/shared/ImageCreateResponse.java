package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ImageCreateResponse
 * Image upload information
**/
public class ImageCreateResponse {
    @JsonProperty("id")
    public String id;
    public ImageCreateResponse withId(String id) {
        this.id = id;
        return this;
    }
}