package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public openapisdk.models.shared.PreviewDeployedDevicesFleetDevice[] devices;
    public ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse withDevices(openapisdk.models.shared.PreviewDeployedDevicesFleetDevice[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta meta;
    public ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse withMeta(ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}