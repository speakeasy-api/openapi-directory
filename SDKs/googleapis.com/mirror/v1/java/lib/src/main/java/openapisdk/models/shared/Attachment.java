package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Attachment
 * Represents media content, such as a photo, that can be attached to a timeline item.
**/
public class Attachment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public String contentType;
    public Attachment withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentUrl")
    public String contentUrl;
    public Attachment withContentUrl(String contentUrl) {
        this.contentUrl = contentUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Attachment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isProcessingContent")
    public Boolean isProcessingContent;
    public Attachment withIsProcessingContent(Boolean isProcessingContent) {
        this.isProcessingContent = isProcessingContent;
        return this;
    }
}