package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RunMobileFriendlyTestResponse
 * Mobile-friendly test response, including mobile-friendly issues and resource issues.
**/
public class RunMobileFriendlyTestResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileFriendliness")
    public RunMobileFriendlyTestResponseMobileFriendlinessEnum mobileFriendliness;
    public RunMobileFriendlyTestResponse withMobileFriendliness(RunMobileFriendlyTestResponseMobileFriendlinessEnum mobileFriendliness) {
        this.mobileFriendliness = mobileFriendliness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileFriendlyIssues")
    public MobileFriendlyIssue[] mobileFriendlyIssues;
    public RunMobileFriendlyTestResponse withMobileFriendlyIssues(MobileFriendlyIssue[] mobileFriendlyIssues) {
        this.mobileFriendlyIssues = mobileFriendlyIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceIssues")
    public ResourceIssue[] resourceIssues;
    public RunMobileFriendlyTestResponse withResourceIssues(ResourceIssue[] resourceIssues) {
        this.resourceIssues = resourceIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenshot")
    public Image screenshot;
    public RunMobileFriendlyTestResponse withScreenshot(Image screenshot) {
        this.screenshot = screenshot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testStatus")
    public TestStatus testStatus;
    public RunMobileFriendlyTestResponse withTestStatus(TestStatus testStatus) {
        this.testStatus = testStatus;
        return this;
    }
}