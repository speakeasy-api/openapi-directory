package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest
 * Request message for the ExchangeDeviceCheckToken method.
**/
public class GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceToken")
    public String deviceToken;
    public GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest withDeviceToken(String deviceToken) {
        this.deviceToken = deviceToken;
        return this;
    }
}