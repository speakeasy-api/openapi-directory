package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceIntegrity
 * Contains the device attestation information.
**/
public class DeviceIntegrity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceRecognitionVerdict")
    public DeviceIntegrityDeviceRecognitionVerdictEnum[] deviceRecognitionVerdict;
    public DeviceIntegrity withDeviceRecognitionVerdict(DeviceIntegrityDeviceRecognitionVerdictEnum[] deviceRecognitionVerdict) {
        this.deviceRecognitionVerdict = deviceRecognitionVerdict;
        return this;
    }
}