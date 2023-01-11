package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestSuiteOverview
 * A summary of a test suite result either parsed from XML or uploaded directly by a user. Note: the API related comments are for StepService only. This message is also being used in ExecutionService in a read only mode for the corresponding step.
**/
public class TestSuiteOverview {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elapsedTime")
    public Duration elapsedTime;
    public TestSuiteOverview withElapsedTime(Duration elapsedTime) {
        this.elapsedTime = elapsedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCount")
    public Integer errorCount;
    public TestSuiteOverview withErrorCount(Integer errorCount) {
        this.errorCount = errorCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCount")
    public Integer failureCount;
    public TestSuiteOverview withFailureCount(Integer failureCount) {
        this.failureCount = failureCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flakyCount")
    public Integer flakyCount;
    public TestSuiteOverview withFlakyCount(Integer flakyCount) {
        this.flakyCount = flakyCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TestSuiteOverview withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skippedCount")
    public Integer skippedCount;
    public TestSuiteOverview withSkippedCount(Integer skippedCount) {
        this.skippedCount = skippedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Integer totalCount;
    public TestSuiteOverview withTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xmlSource")
    public FileReference xmlSource;
    public TestSuiteOverview withXmlSource(FileReference xmlSource) {
        this.xmlSource = xmlSource;
        return this;
    }
}