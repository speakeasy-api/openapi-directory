package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LockNetworkSmDevicesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String[] ids;
    public LockNetworkSmDevicesRequestBody withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pin")
    public Long pin;
    public LockNetworkSmDevicesRequestBody withPin(Long pin) {
        this.pin = pin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String[] scope;
    public LockNetworkSmDevicesRequestBody withScope(String[] scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serials")
    public String[] serials;
    public LockNetworkSmDevicesRequestBody withSerials(String[] serials) {
        this.serials = serials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wifiMacs")
    public String[] wifiMacs;
    public LockNetworkSmDevicesRequestBody withWifiMacs(String[] wifiMacs) {
        this.wifiMacs = wifiMacs;
        return this;
    }
}