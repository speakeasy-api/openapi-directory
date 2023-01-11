package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalCreateSignedDeviceRequest
 * Request for CreateSignedDevice.
**/
public class SasPortalCreateSignedDeviceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodedDevice")
    public String encodedDevice;
    public SasPortalCreateSignedDeviceRequest withEncodedDevice(String encodedDevice) {
        this.encodedDevice = encodedDevice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installerId")
    public String installerId;
    public SasPortalCreateSignedDeviceRequest withInstallerId(String installerId) {
        this.installerId = installerId;
        return this;
    }
}