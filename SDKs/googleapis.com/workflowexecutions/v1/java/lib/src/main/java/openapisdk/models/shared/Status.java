package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Status
 * Represents the current status of this execution.
**/
public class Status {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentSteps")
    public Step[] currentSteps;
    public Status withCurrentSteps(Step[] currentSteps) {
        this.currentSteps = currentSteps;
        return this;
    }
}