package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssignmentSubmission
 * Student work for an assignment.
**/
public class AssignmentSubmission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachments")
    public Attachment[] attachments;
    public AssignmentSubmission withAttachments(Attachment[] attachments) {
        this.attachments = attachments;
        return this;
    }
}