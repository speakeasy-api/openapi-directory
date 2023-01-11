package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAttachmentRequestInput
 * The request message for the CreateAttachment endpoint.
**/
public class CreateAttachmentRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachment")
    public AttachmentInput attachment;
    public CreateAttachmentRequestInput withAttachment(AttachmentInput attachment) {
        this.attachment = attachment;
        return this;
    }
}