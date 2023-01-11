package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoPreviewUrl
 * Video preview information
**/
public class VideoPreviewUrl {
    @JsonProperty("url")
    public String url;
    public VideoPreviewUrl withUrl(String url) {
        this.url = url;
        return this;
    }
}