package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Photo
 * This contains the list of the fields that are common to all media returned.
**/
public class Photo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Long height;
    public Photo withHeight(Long height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_key")
    public String mediaKey;
    public Photo withMediaKey(String mediaKey) {
        this.mediaKey = mediaKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PhotoTypeEnum type;
    public Photo withType(PhotoTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Photo withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Long width;
    public Photo withWidth(Long width) {
        this.width = width;
        return this;
    }
}