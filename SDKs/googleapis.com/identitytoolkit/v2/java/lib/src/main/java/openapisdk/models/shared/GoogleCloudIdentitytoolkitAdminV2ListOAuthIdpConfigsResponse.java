package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse
 * Response for ListOAuthIdpConfigs
**/
public class GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthIdpConfigs")
    public GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig[] oauthIdpConfigs;
    public GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse withOauthIdpConfigs(GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig[] oauthIdpConfigs) {
        this.oauthIdpConfigs = oauthIdpConfigs;
        return this;
    }
}