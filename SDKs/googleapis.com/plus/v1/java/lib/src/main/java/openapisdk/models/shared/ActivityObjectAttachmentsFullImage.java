package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityObjectAttachmentsFullImage
 * The full image URL for photo attachments.
**/
public class ActivityObjectAttachmentsFullImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Long height;
    public ActivityObjectAttachmentsFullImage withHeight(Long height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ActivityObjectAttachmentsFullImage withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ActivityObjectAttachmentsFullImage withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Long width;
    public ActivityObjectAttachmentsFullImage withWidth(Long width) {
        this.width = width;
        return this;
    }
}