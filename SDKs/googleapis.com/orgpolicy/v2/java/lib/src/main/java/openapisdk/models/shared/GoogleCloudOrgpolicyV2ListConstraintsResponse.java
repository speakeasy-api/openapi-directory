package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudOrgpolicyV2ListConstraintsResponse
 * The response returned from the ListConstraints method.
**/
public class GoogleCloudOrgpolicyV2ListConstraintsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraints")
    public GoogleCloudOrgpolicyV2Constraint[] constraints;
    public GoogleCloudOrgpolicyV2ListConstraintsResponse withConstraints(GoogleCloudOrgpolicyV2Constraint[] constraints) {
        this.constraints = constraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudOrgpolicyV2ListConstraintsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}