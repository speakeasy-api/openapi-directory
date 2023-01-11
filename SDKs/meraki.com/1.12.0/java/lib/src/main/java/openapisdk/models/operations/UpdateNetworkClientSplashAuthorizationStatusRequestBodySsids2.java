package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2
 * Splash authorization for SSID 2
**/
public class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAuthorized")
    public Boolean isAuthorized;
    public UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2 withIsAuthorized(Boolean isAuthorized) {
        this.isAuthorized = isAuthorized;
        return this;
    }
}