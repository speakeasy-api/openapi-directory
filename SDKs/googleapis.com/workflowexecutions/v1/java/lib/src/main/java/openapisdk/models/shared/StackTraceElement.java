package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StackTraceElement
 * A single stack element (frame) where an error occurred.
**/
public class StackTraceElement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Position position;
    public StackTraceElement withPosition(Position position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routine")
    public String routine;
    public StackTraceElement withRoutine(String routine) {
        this.routine = routine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("step")
    public String step;
    public StackTraceElement withStep(String step) {
        this.step = step;
        return this;
    }
}