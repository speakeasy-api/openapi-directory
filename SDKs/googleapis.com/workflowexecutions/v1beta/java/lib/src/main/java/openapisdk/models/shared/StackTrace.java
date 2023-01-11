package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StackTrace
 * A collection of stack elements (frames) where an error occurred.
**/
public class StackTrace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elements")
    public StackTraceElement[] elements;
    public StackTrace withElements(StackTraceElement[] elements) {
        this.elements = elements;
        return this;
    }
}