package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ImageUrl {
    @JsonProperty("url")
    public String url;
    public ImageUrl withUrl(String url) {
        this.url = url;
        return this;
    }
}