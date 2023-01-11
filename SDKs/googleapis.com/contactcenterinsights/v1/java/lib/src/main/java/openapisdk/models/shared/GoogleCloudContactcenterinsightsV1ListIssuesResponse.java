package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ListIssuesResponse
 * The response of listing issues.
**/
public class GoogleCloudContactcenterinsightsV1ListIssuesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues")
    public GoogleCloudContactcenterinsightsV1Issue[] issues;
    public GoogleCloudContactcenterinsightsV1ListIssuesResponse withIssues(GoogleCloudContactcenterinsightsV1Issue[] issues) {
        this.issues = issues;
        return this;
    }
}