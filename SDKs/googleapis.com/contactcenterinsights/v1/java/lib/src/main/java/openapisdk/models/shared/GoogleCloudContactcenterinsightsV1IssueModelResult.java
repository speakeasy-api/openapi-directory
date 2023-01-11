package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1IssueModelResult
 * Issue Modeling result on a conversation.
**/
public class GoogleCloudContactcenterinsightsV1IssueModelResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueModel")
    public String issueModel;
    public GoogleCloudContactcenterinsightsV1IssueModelResult withIssueModel(String issueModel) {
        this.issueModel = issueModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues")
    public GoogleCloudContactcenterinsightsV1IssueAssignment[] issues;
    public GoogleCloudContactcenterinsightsV1IssueModelResult withIssues(GoogleCloudContactcenterinsightsV1IssueAssignment[] issues) {
        this.issues = issues;
        return this;
    }
}