package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest
 * The request to undeploy an issue model.
**/
public class GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest withName(String name) {
        this.name = name;
        return this;
    }
}