package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkClientSplashAuthorizationStatusRequestBody {
    @JsonProperty("ssids")
    public UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids ssids;
    public UpdateNetworkClientSplashAuthorizationStatusRequestBody withSsids(UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids ssids) {
        this.ssids = ssids;
        return this;
    }
}