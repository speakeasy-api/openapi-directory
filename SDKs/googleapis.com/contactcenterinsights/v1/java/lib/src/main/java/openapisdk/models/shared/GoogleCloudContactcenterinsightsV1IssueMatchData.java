package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1IssueMatchData
 * The data for an issue match annotation.
**/
public class GoogleCloudContactcenterinsightsV1IssueMatchData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueAssignment")
    public GoogleCloudContactcenterinsightsV1IssueAssignment issueAssignment;
    public GoogleCloudContactcenterinsightsV1IssueMatchData withIssueAssignment(GoogleCloudContactcenterinsightsV1IssueAssignment issueAssignment) {
        this.issueAssignment = issueAssignment;
        return this;
    }
}