package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3
 * Splash authorization for SSID 3
**/
public class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAuthorized")
    public Boolean isAuthorized;
    public UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3 withIsAuthorized(Boolean isAuthorized) {
        this.isAuthorized = isAuthorized;
        return this;
    }
}