package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StackTrace
 * A call stack appearing in a trace.
**/
public class StackTrace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackFrames")
    public StackFrames stackFrames;
    public StackTrace withStackFrames(StackFrames stackFrames) {
        this.stackFrames = stackFrames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackTraceHashId")
    public String stackTraceHashId;
    public StackTrace withStackTraceHashId(String stackTraceHashId) {
        this.stackTraceHashId = stackTraceHashId;
        return this;
    }
}