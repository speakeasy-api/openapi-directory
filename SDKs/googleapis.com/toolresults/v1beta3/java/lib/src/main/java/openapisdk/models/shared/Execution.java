package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Execution
 * An Execution represents a collection of Steps. For instance, it could represent: - a mobile test executed across a range of device configurations - a jenkins job with a build step followed by a test step The maximum size of an execution message is 1 MiB. An Execution can be updated until its state is set to COMPLETE at which point it becomes immutable.
**/
public class Execution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completionTime")
    public Timestamp completionTime;
    public Execution withCompletionTime(Timestamp completionTime) {
        this.completionTime = completionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public Timestamp creationTime;
    public Execution withCreationTime(Timestamp creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionDefinitions")
    public java.util.Map<String, Object>[] dimensionDefinitions;
    public Execution withDimensionDefinitions(java.util.Map<String, Object>[] dimensionDefinitions) {
        this.dimensionDefinitions = dimensionDefinitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionId")
    public String executionId;
    public Execution withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outcome")
    public Outcome outcome;
    public Execution withOutcome(Outcome outcome) {
        this.outcome = outcome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specification")
    public Specification specification;
    public Execution withSpecification(Specification specification) {
        this.specification = specification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ExecutionStateEnum state;
    public Execution withState(ExecutionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testExecutionMatrixId")
    public String testExecutionMatrixId;
    public Execution withTestExecutionMatrixId(String testExecutionMatrixId) {
        this.testExecutionMatrixId = testExecutionMatrixId;
        return this;
    }
}