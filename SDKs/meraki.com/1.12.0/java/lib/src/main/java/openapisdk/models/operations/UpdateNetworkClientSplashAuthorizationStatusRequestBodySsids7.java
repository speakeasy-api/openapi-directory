package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7
 * Splash authorization for SSID 7
**/
public class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAuthorized")
    public Boolean isAuthorized;
    public UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7 withIsAuthorized(Boolean isAuthorized) {
        this.isAuthorized = isAuthorized;
        return this;
    }
}