package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse
 * Response for DefaultSupportedIdpConfigs
**/
public class GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultSupportedIdpConfigs")
    public GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig[] defaultSupportedIdpConfigs;
    public GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse withDefaultSupportedIdpConfigs(GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig[] defaultSupportedIdpConfigs) {
        this.defaultSupportedIdpConfigs = defaultSupportedIdpConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}