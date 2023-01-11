package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1DeployIssueModelRequest
 * The request to deploy an issue model.
**/
public class GoogleCloudContactcenterinsightsV1DeployIssueModelRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudContactcenterinsightsV1DeployIssueModelRequest withName(String name) {
        this.name = name;
        return this;
    }
}