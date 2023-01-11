package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkCameraWirelessProfileRequestBodySsid
 * The details of the SSID config.
**/
public class UpdateNetworkCameraWirelessProfileRequestBodySsid {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authMode")
    public UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum authMode;
    public UpdateNetworkCameraWirelessProfileRequestBodySsid withAuthMode(UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum authMode) {
        this.authMode = authMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionMode")
    public String encryptionMode;
    public UpdateNetworkCameraWirelessProfileRequestBodySsid withEncryptionMode(String encryptionMode) {
        this.encryptionMode = encryptionMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkCameraWirelessProfileRequestBodySsid withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("psk")
    public String psk;
    public UpdateNetworkCameraWirelessProfileRequestBodySsid withPsk(String psk) {
        this.psk = psk;
        return this;
    }
}