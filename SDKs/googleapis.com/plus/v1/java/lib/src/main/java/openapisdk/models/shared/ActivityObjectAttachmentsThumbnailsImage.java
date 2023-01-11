package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityObjectAttachmentsThumbnailsImage
 * Image resource.
**/
public class ActivityObjectAttachmentsThumbnailsImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Long height;
    public ActivityObjectAttachmentsThumbnailsImage withHeight(Long height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ActivityObjectAttachmentsThumbnailsImage withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ActivityObjectAttachmentsThumbnailsImage withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Long width;
    public ActivityObjectAttachmentsThumbnailsImage withWidth(Long width) {
        this.width = width;
        return this;
    }
}