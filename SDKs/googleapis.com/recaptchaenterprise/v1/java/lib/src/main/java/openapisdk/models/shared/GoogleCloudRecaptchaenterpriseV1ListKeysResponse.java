package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1ListKeysResponse
 * Response to request to list keys in a project.
**/
public class GoogleCloudRecaptchaenterpriseV1ListKeysResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keys")
    public GoogleCloudRecaptchaenterpriseV1Key[] keys;
    public GoogleCloudRecaptchaenterpriseV1ListKeysResponse withKeys(GoogleCloudRecaptchaenterpriseV1Key[] keys) {
        this.keys = keys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudRecaptchaenterpriseV1ListKeysResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}