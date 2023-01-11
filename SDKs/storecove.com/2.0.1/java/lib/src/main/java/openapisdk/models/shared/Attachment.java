package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Attachment
 * A document attachment to the invoice.
**/
public class Attachment {
    @JsonProperty("document")
    public String document;
    public Attachment withDocument(String document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filename")
    public String filename;
    public Attachment withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonProperty("mimeType")
    public AttachmentMimeTypeEnum mimeType;
    public Attachment withMimeType(AttachmentMimeTypeEnum mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryImage")
    public Boolean primaryImage;
    public Attachment withPrimaryImage(Boolean primaryImage) {
        this.primaryImage = primaryImage;
        return this;
    }
}