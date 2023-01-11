package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestExecutionStep
 * A step that represents running tests. It accepts ant-junit xml files which will be parsed into structured test results by the service. Xml file paths are updated in order to append more files, however they can't be deleted. Users can also add test results manually by using the test_result field.
**/
public class TestExecutionStep {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testIssues")
    public TestIssue[] testIssues;
    public TestExecutionStep withTestIssues(TestIssue[] testIssues) {
        this.testIssues = testIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testSuiteOverviews")
    public TestSuiteOverview[] testSuiteOverviews;
    public TestExecutionStep withTestSuiteOverviews(TestSuiteOverview[] testSuiteOverviews) {
        this.testSuiteOverviews = testSuiteOverviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testTiming")
    public TestTiming testTiming;
    public TestExecutionStep withTestTiming(TestTiming testTiming) {
        this.testTiming = testTiming;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toolExecution")
    public ToolExecution toolExecution;
    public TestExecutionStep withToolExecution(ToolExecution toolExecution) {
        this.toolExecution = toolExecution;
        return this;
    }
}