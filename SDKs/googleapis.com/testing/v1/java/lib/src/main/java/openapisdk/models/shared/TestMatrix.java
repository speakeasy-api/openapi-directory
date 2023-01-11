package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestMatrix
 * TestMatrix captures all details about a test. It contains the environment configuration, test specification, test executions and overall state and outcome.
**/
public class TestMatrix {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientInfo")
    public ClientInfo clientInfo;
    public TestMatrix withClientInfo(ClientInfo clientInfo) {
        this.clientInfo = clientInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentMatrix")
    public EnvironmentMatrix environmentMatrix;
    public TestMatrix withEnvironmentMatrix(EnvironmentMatrix environmentMatrix) {
        this.environmentMatrix = environmentMatrix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failFast")
    public Boolean failFast;
    public TestMatrix withFailFast(Boolean failFast) {
        this.failFast = failFast;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flakyTestAttempts")
    public Integer flakyTestAttempts;
    public TestMatrix withFlakyTestAttempts(Integer flakyTestAttempts) {
        this.flakyTestAttempts = flakyTestAttempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalidMatrixDetails")
    public TestMatrixInvalidMatrixDetailsEnum invalidMatrixDetails;
    public TestMatrix withInvalidMatrixDetails(TestMatrixInvalidMatrixDetailsEnum invalidMatrixDetails) {
        this.invalidMatrixDetails = invalidMatrixDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outcomeSummary")
    public TestMatrixOutcomeSummaryEnum outcomeSummary;
    public TestMatrix withOutcomeSummary(TestMatrixOutcomeSummaryEnum outcomeSummary) {
        this.outcomeSummary = outcomeSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public TestMatrix withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultStorage")
    public ResultStorage resultStorage;
    public TestMatrix withResultStorage(ResultStorage resultStorage) {
        this.resultStorage = resultStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public TestMatrixStateEnum state;
    public TestMatrix withState(TestMatrixStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testExecutions")
    public TestExecution[] testExecutions;
    public TestMatrix withTestExecutions(TestExecution[] testExecutions) {
        this.testExecutions = testExecutions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testMatrixId")
    public String testMatrixId;
    public TestMatrix withTestMatrixId(String testMatrixId) {
        this.testMatrixId = testMatrixId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testSpecification")
    public TestSpecification testSpecification;
    public TestMatrix withTestSpecification(TestSpecification testSpecification) {
        this.testSpecification = testSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public TestMatrix withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}