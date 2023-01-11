package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceWirelessBluetoothSettingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("major")
    public Long major;
    public UpdateDeviceWirelessBluetoothSettingsRequestBody withMajor(Long major) {
        this.major = major;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minor")
    public Long minor;
    public UpdateDeviceWirelessBluetoothSettingsRequestBody withMinor(Long minor) {
        this.minor = minor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public UpdateDeviceWirelessBluetoothSettingsRequestBody withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}