package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActivityObjectAttachmentsThumbnails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ActivityObjectAttachmentsThumbnails withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public ActivityObjectAttachmentsThumbnailsImage image;
    public ActivityObjectAttachmentsThumbnails withImage(ActivityObjectAttachmentsThumbnailsImage image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ActivityObjectAttachmentsThumbnails withUrl(String url) {
        this.url = url;
        return this;
    }
}