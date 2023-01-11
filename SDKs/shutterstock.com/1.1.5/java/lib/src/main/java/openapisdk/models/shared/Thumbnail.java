package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Thumbnail
 * Image thumbnail information
**/
public class Thumbnail {
    @JsonProperty("height")
    public Long height;
    public Thumbnail withHeight(Long height) {
        this.height = height;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Thumbnail withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("width")
    public Long width;
    public Thumbnail withWidth(Long width) {
        this.width = width;
        return this;
    }
}