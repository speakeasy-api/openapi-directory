package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error
 * Error describes why the execution was abnormally terminated.
**/
public class Error {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public String context;
    public Error withContext(String context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public String payload;
    public Error withPayload(String payload) {
        this.payload = payload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackTrace")
    public StackTrace stackTrace;
    public Error withStackTrace(StackTrace stackTrace) {
        this.stackTrace = stackTrace;
        return this;
    }
}