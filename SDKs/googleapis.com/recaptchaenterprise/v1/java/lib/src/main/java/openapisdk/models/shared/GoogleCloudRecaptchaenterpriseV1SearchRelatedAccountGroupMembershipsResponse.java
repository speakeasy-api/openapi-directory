package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse
 * The response to a `SearchRelatedAccountGroupMemberships` call.
**/
public class GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedAccountGroupMemberships")
    public GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership[] relatedAccountGroupMemberships;
    public GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse withRelatedAccountGroupMemberships(GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership[] relatedAccountGroupMemberships) {
        this.relatedAccountGroupMemberships = relatedAccountGroupMemberships;
        return this;
    }
}