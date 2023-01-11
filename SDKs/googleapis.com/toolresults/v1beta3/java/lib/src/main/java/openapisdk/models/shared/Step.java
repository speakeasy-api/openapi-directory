package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Step
 * A Step represents a single operation performed as part of Execution. A step can be used to represent the execution of a tool ( for example a test runner execution or an execution of a compiler). Steps can overlap (for instance two steps might have the same start time if some operations are done in parallel). Here is an example, let's consider that we have a continuous build is executing a test runner for each iteration. The workflow would look like: - user creates a Execution with id 1 - user creates an TestExecutionStep with id 100 for Execution 1 - user update TestExecutionStep with id 100 to add a raw xml log + the service parses the xml logs and returns a TestExecutionStep with updated TestResult(s). - user update the status of TestExecutionStep with id 100 to COMPLETE A Step can be updated until its state is set to COMPLETE at which points it becomes immutable. Next tag: 27
**/
public class Step {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completionTime")
    public Timestamp completionTime;
    public Step withCompletionTime(Timestamp completionTime) {
        this.completionTime = completionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public Timestamp creationTime;
    public Step withCreationTime(Timestamp creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Step withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceUsageDuration")
    public Duration deviceUsageDuration;
    public Step withDeviceUsageDuration(Duration deviceUsageDuration) {
        this.deviceUsageDuration = deviceUsageDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionValue")
    public StepDimensionValueEntry[] dimensionValue;
    public Step withDimensionValue(StepDimensionValueEntry[] dimensionValue) {
        this.dimensionValue = dimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasImages")
    public Boolean hasImages;
    public Step withHasImages(Boolean hasImages) {
        this.hasImages = hasImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public StepLabelsEntry[] labels;
    public Step withLabels(StepLabelsEntry[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiStep")
    public MultiStep multiStep;
    public Step withMultiStep(MultiStep multiStep) {
        this.multiStep = multiStep;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Step withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outcome")
    public Outcome outcome;
    public Step withOutcome(Outcome outcome) {
        this.outcome = outcome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runDuration")
    public Duration runDuration;
    public Step withRunDuration(Duration runDuration) {
        this.runDuration = runDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public StepStateEnum state;
    public Step withState(StepStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stepId")
    public String stepId;
    public Step withStepId(String stepId) {
        this.stepId = stepId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testExecutionStep")
    public TestExecutionStep testExecutionStep;
    public Step withTestExecutionStep(TestExecutionStep testExecutionStep) {
        this.testExecutionStep = testExecutionStep;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toolExecutionStep")
    public ToolExecutionStep toolExecutionStep;
    public Step withToolExecutionStep(ToolExecutionStep toolExecutionStep) {
        this.toolExecutionStep = toolExecutionStep;
        return this;
    }
}