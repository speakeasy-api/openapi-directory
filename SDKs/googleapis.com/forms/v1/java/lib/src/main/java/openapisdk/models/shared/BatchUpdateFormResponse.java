package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateFormResponse
 * Response to a BatchUpdateFormRequest.
**/
public class BatchUpdateFormResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form")
    public Form form;
    public BatchUpdateFormResponse withForm(Form form) {
        this.form = form;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replies")
    public Response[] replies;
    public BatchUpdateFormResponse withReplies(Response[] replies) {
        this.replies = replies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("writeControl")
    public WriteControl writeControl;
    public BatchUpdateFormResponse withWriteControl(WriteControl writeControl) {
        this.writeControl = writeControl;
        return this;
    }
}