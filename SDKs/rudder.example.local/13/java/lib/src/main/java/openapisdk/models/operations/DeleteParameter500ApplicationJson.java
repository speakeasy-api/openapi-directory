package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteParameter500ApplicationJson {
    @JsonProperty("action")
    public DeleteParameter500ApplicationJsonActionEnum action;
    public DeleteParameter500ApplicationJson withAction(DeleteParameter500ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDetails")
    public String errorDetails;
    public DeleteParameter500ApplicationJson withErrorDetails(String errorDetails) {
        this.errorDetails = errorDetails;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public DeleteParameter500ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("result")
    public DeleteParameter500ApplicationJsonResultEnum result;
    public DeleteParameter500ApplicationJson withResult(DeleteParameter500ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}