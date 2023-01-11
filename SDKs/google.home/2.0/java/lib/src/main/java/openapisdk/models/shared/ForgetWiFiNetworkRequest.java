package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ForgetWiFiNetworkRequest {
    @JsonProperty("wpa_id")
    public Integer wpaId;
    public ForgetWiFiNetworkRequest withWpaId(Integer wpaId) {
        this.wpaId = wpaId;
        return this;
    }
}