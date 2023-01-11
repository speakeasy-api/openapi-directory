package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest
 * The request message to search related account group memberships.
**/
public class GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hashedAccountId")
    public String hashedAccountId;
    public GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest withHashedAccountId(String hashedAccountId) {
        this.hashedAccountId = hashedAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}