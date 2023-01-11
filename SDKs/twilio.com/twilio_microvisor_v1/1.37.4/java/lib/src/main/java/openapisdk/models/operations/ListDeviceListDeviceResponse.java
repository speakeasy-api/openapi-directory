package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeviceListDeviceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public openapisdk.models.shared.MicrovisorV1Device[] devices;
    public ListDeviceListDeviceResponse withDevices(openapisdk.models.shared.MicrovisorV1Device[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListDeviceListDeviceResponseMeta meta;
    public ListDeviceListDeviceResponse withMeta(ListDeviceListDeviceResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}