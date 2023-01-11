package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1GraphicsAdapterInfo
 * Information of a graphics adapter (GPU).
**/
public class GoogleChromeManagementV1GraphicsAdapterInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adapter")
    public String adapter;
    public GoogleChromeManagementV1GraphicsAdapterInfo withAdapter(String adapter) {
        this.adapter = adapter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public String deviceId;
    public GoogleChromeManagementV1GraphicsAdapterInfo withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driverVersion")
    public String driverVersion;
    public GoogleChromeManagementV1GraphicsAdapterInfo withDriverVersion(String driverVersion) {
        this.driverVersion = driverVersion;
        return this;
    }
}