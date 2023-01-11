package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Step
 * Represents a step of the workflow this execution is running.
**/
public class Step {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routine")
    public String routine;
    public Step withRoutine(String routine) {
        this.routine = routine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("step")
    public String step;
    public Step withStep(String step) {
        this.step = step;
        return this;
    }
}