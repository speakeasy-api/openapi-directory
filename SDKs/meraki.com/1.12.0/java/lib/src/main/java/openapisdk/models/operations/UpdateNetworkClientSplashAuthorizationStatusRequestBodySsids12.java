package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12
 * Splash authorization for SSID 12
**/
public class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAuthorized")
    public Boolean isAuthorized;
    public UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12 withIsAuthorized(Boolean isAuthorized) {
        this.isAuthorized = isAuthorized;
        return this;
    }
}