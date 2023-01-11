package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EventAttachment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileId")
    public String fileId;
    public EventAttachment withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileUrl")
    public String fileUrl;
    public EventAttachment withFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconLink")
    public String iconLink;
    public EventAttachment withIconLink(String iconLink) {
        this.iconLink = iconLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public EventAttachment withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public EventAttachment withTitle(String title) {
        this.title = title;
        return this;
    }
}