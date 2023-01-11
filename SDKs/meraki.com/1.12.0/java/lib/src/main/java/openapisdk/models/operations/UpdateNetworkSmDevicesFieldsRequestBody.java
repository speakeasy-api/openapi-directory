package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSmDevicesFieldsRequestBody {
    @JsonProperty("deviceFields")
    public UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields deviceFields;
    public UpdateNetworkSmDevicesFieldsRequestBody withDeviceFields(UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields deviceFields) {
        this.deviceFields = deviceFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateNetworkSmDevicesFieldsRequestBody withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serial")
    public String serial;
    public UpdateNetworkSmDevicesFieldsRequestBody withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wifiMac")
    public String wifiMac;
    public UpdateNetworkSmDevicesFieldsRequestBody withWifiMac(String wifiMac) {
        this.wifiMac = wifiMac;
        return this;
    }
}