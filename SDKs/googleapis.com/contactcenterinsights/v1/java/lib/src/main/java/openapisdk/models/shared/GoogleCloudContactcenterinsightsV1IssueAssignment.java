package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1IssueAssignment
 * Information about the issue.
**/
public class GoogleCloudContactcenterinsightsV1IssueAssignment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudContactcenterinsightsV1IssueAssignment withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue")
    public String issue;
    public GoogleCloudContactcenterinsightsV1IssueAssignment withIssue(String issue) {
        this.issue = issue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Double score;
    public GoogleCloudContactcenterinsightsV1IssueAssignment withScore(Double score) {
        this.score = score;
        return this;
    }
}