package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalUpdateSignedDeviceRequest
 * Request for UpdateSignedDevice.
**/
public class SasPortalUpdateSignedDeviceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodedDevice")
    public String encodedDevice;
    public SasPortalUpdateSignedDeviceRequest withEncodedDevice(String encodedDevice) {
        this.encodedDevice = encodedDevice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installerId")
    public String installerId;
    public SasPortalUpdateSignedDeviceRequest withInstallerId(String installerId) {
        this.installerId = installerId;
        return this;
    }
}