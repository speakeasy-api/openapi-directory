package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyAttachmentsRequest
 * Request to modify the attachments of a student submission.
**/
public class ModifyAttachmentsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addAttachments")
    public Attachment[] addAttachments;
    public ModifyAttachmentsRequest withAddAttachments(Attachment[] addAttachments) {
        this.addAttachments = addAttachments;
        return this;
    }
}