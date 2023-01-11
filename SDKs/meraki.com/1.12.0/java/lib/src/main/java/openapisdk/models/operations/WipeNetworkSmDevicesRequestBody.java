package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WipeNetworkSmDevicesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public WipeNetworkSmDevicesRequestBody withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pin")
    public Long pin;
    public WipeNetworkSmDevicesRequestBody withPin(Long pin) {
        this.pin = pin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serial")
    public String serial;
    public WipeNetworkSmDevicesRequestBody withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wifiMac")
    public String wifiMac;
    public WipeNetworkSmDevicesRequestBody withWifiMac(String wifiMac) {
        this.wifiMac = wifiMac;
        return this;
    }
}