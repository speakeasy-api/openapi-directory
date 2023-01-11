package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse
 * The response to a `ListRelatedAccountGroups` call.
**/
public class GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedAccountGroups")
    public GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup[] relatedAccountGroups;
    public GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse withRelatedAccountGroups(GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup[] relatedAccountGroups) {
        this.relatedAccountGroups = relatedAccountGroups;
        return this;
    }
}