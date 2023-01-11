package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestExecution
 * A single test executed in a single environment.
**/
public class TestExecution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public Environment environment;
    public TestExecution withEnvironment(Environment environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public TestExecution withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matrixId")
    public String matrixId;
    public TestExecution withMatrixId(String matrixId) {
        this.matrixId = matrixId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public TestExecution withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shard")
    public Shard shard;
    public TestExecution withShard(Shard shard) {
        this.shard = shard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public TestExecutionStateEnum state;
    public TestExecution withState(TestExecutionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testDetails")
    public TestDetails testDetails;
    public TestExecution withTestDetails(TestDetails testDetails) {
        this.testDetails = testDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testSpecification")
    public TestSpecification testSpecification;
    public TestExecution withTestSpecification(TestSpecification testSpecification) {
        this.testSpecification = testSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public TestExecution withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toolResultsStep")
    public ToolResultsStep toolResultsStep;
    public TestExecution withToolResultsStep(ToolResultsStep toolResultsStep) {
        this.toolResultsStep = toolResultsStep;
        return this;
    }
}