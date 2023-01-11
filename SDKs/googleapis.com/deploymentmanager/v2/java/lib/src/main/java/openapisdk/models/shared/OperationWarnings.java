package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OperationWarnings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public OperationWarningsCodeEnum code;
    public OperationWarnings withCode(OperationWarningsCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public OperationWarningsData[] data;
    public OperationWarnings withData(OperationWarningsData[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public OperationWarnings withMessage(String message) {
        this.message = message;
        return this;
    }
}