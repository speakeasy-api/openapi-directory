package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ListIssueModelsResponse
 * The response of listing issue models.
**/
public class GoogleCloudContactcenterinsightsV1ListIssueModelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueModels")
    public GoogleCloudContactcenterinsightsV1IssueModel[] issueModels;
    public GoogleCloudContactcenterinsightsV1ListIssueModelsResponse withIssueModels(GoogleCloudContactcenterinsightsV1IssueModel[] issueModels) {
        this.issueModels = issueModels;
        return this;
    }
}