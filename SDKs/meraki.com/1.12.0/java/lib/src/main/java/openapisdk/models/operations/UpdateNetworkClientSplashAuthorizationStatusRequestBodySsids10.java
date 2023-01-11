package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10
 * Splash authorization for SSID 10
**/
public class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAuthorized")
    public Boolean isAuthorized;
    public UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10 withIsAuthorized(Boolean isAuthorized) {
        this.isAuthorized = isAuthorized;
        return this;
    }
}