package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateFormRequestInput
 * A batch of updates to perform on a form. All the specified updates are made or none of them are.
**/
public class BatchUpdateFormRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeFormInResponse")
    public Boolean includeFormInResponse;
    public BatchUpdateFormRequestInput withIncludeFormInResponse(Boolean includeFormInResponse) {
        this.includeFormInResponse = includeFormInResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public RequestInput[] requests;
    public BatchUpdateFormRequestInput withRequests(RequestInput[] requests) {
        this.requests = requests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("writeControl")
    public WriteControl writeControl;
    public BatchUpdateFormRequestInput withWriteControl(WriteControl writeControl) {
        this.writeControl = writeControl;
        return this;
    }
}