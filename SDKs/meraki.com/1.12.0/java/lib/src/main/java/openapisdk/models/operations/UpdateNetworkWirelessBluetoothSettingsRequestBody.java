package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessBluetoothSettingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertisingEnabled")
    public Boolean advertisingEnabled;
    public UpdateNetworkWirelessBluetoothSettingsRequestBody withAdvertisingEnabled(Boolean advertisingEnabled) {
        this.advertisingEnabled = advertisingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("major")
    public Long major;
    public UpdateNetworkWirelessBluetoothSettingsRequestBody withMajor(Long major) {
        this.major = major;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("majorMinorAssignmentMode")
    public UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum majorMinorAssignmentMode;
    public UpdateNetworkWirelessBluetoothSettingsRequestBody withMajorMinorAssignmentMode(UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum majorMinorAssignmentMode) {
        this.majorMinorAssignmentMode = majorMinorAssignmentMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minor")
    public Long minor;
    public UpdateNetworkWirelessBluetoothSettingsRequestBody withMinor(Long minor) {
        this.minor = minor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scanningEnabled")
    public Boolean scanningEnabled;
    public UpdateNetworkWirelessBluetoothSettingsRequestBody withScanningEnabled(Boolean scanningEnabled) {
        this.scanningEnabled = scanningEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public UpdateNetworkWirelessBluetoothSettingsRequestBody withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}