package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudOrgpolicyV2ListCustomConstraintsResponse
 * The response returned from the ListCustomConstraints method. It will be empty if no `CustomConstraints` are set on the organization resource.
**/
public class GoogleCloudOrgpolicyV2ListCustomConstraintsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customConstraints")
    public GoogleCloudOrgpolicyV2CustomConstraint[] customConstraints;
    public GoogleCloudOrgpolicyV2ListCustomConstraintsResponse withCustomConstraints(GoogleCloudOrgpolicyV2CustomConstraint[] customConstraints) {
        this.customConstraints = customConstraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudOrgpolicyV2ListCustomConstraintsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}