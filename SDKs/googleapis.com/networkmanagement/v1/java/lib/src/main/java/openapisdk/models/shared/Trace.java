package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Trace
 * Trace represents one simulated packet forwarding path. * Each trace contains multiple ordered steps. * Each step is in a particular state with associated configuration. * State is categorized as final or non-final states. * Each final state has a reason associated. * Each trace must end with a final state (the last step). ``` |---------------------Trace----------------------| Step1(State) Step2(State) --- StepN(State(final)) ```
**/
public class Trace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointInfo")
    public EndpointInfo endpointInfo;
    public Trace withEndpointInfo(EndpointInfo endpointInfo) {
        this.endpointInfo = endpointInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public Step[] steps;
    public Trace withSteps(Step[] steps) {
        this.steps = steps;
        return this;
    }
}