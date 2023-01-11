package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse
 * Response for ListInboundSamlConfigs
**/
public class GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inboundSamlConfigs")
    public GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig[] inboundSamlConfigs;
    public GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse withInboundSamlConfigs(GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig[] inboundSamlConfigs) {
        this.inboundSamlConfigs = inboundSamlConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}