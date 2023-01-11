package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityObjectAttachmentsEmbed
 * If the attachment is a video, the embeddable link.
**/
public class ActivityObjectAttachmentsEmbed {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ActivityObjectAttachmentsEmbed withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ActivityObjectAttachmentsEmbed withUrl(String url) {
        this.url = url;
        return this;
    }
}