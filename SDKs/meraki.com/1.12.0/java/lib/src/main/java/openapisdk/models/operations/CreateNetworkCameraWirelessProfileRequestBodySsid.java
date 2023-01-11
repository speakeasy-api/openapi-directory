package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkCameraWirelessProfileRequestBodySsid
 * The details of the SSID config.
**/
public class CreateNetworkCameraWirelessProfileRequestBodySsid {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authMode")
    public CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum authMode;
    public CreateNetworkCameraWirelessProfileRequestBodySsid withAuthMode(CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum authMode) {
        this.authMode = authMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionMode")
    public String encryptionMode;
    public CreateNetworkCameraWirelessProfileRequestBodySsid withEncryptionMode(String encryptionMode) {
        this.encryptionMode = encryptionMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateNetworkCameraWirelessProfileRequestBodySsid withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("psk")
    public String psk;
    public CreateNetworkCameraWirelessProfileRequestBodySsid withPsk(String psk) {
        this.psk = psk;
        return this;
    }
}