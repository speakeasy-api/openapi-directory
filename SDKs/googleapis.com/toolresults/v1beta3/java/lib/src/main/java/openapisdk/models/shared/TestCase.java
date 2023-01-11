package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestCase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elapsedTime")
    public Duration elapsedTime;
    public TestCase withElapsedTime(Duration elapsedTime) {
        this.elapsedTime = elapsedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public Timestamp endTime;
    public TestCase withEndTime(Timestamp endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skippedMessage")
    public String skippedMessage;
    public TestCase withSkippedMessage(String skippedMessage) {
        this.skippedMessage = skippedMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackTraces")
    public StackTrace[] stackTraces;
    public TestCase withStackTraces(StackTrace[] stackTraces) {
        this.stackTraces = stackTraces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public Timestamp startTime;
    public TestCase withStartTime(Timestamp startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TestCaseStatusEnum status;
    public TestCase withStatus(TestCaseStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testCaseId")
    public String testCaseId;
    public TestCase withTestCaseId(String testCaseId) {
        this.testCaseId = testCaseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testCaseReference")
    public TestCaseReference testCaseReference;
    public TestCase withTestCaseReference(TestCaseReference testCaseReference) {
        this.testCaseReference = testCaseReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toolOutputs")
    public ToolOutputReference[] toolOutputs;
    public TestCase withToolOutputs(ToolOutputReference[] toolOutputs) {
        this.toolOutputs = toolOutputs;
        return this;
    }
}