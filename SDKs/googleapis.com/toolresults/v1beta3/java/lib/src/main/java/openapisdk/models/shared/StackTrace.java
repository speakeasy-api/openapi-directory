package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StackTrace
 * A stacktrace.
**/
public class StackTrace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exception")
    public String exception;
    public StackTrace withException(String exception) {
        this.exception = exception;
        return this;
    }
}