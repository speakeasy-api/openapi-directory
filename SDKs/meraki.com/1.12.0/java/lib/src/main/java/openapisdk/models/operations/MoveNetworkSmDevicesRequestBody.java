package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MoveNetworkSmDevicesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String[] ids;
    public MoveNetworkSmDevicesRequestBody withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonProperty("newNetwork")
    public String newNetwork;
    public MoveNetworkSmDevicesRequestBody withNewNetwork(String newNetwork) {
        this.newNetwork = newNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String[] scope;
    public MoveNetworkSmDevicesRequestBody withScope(String[] scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serials")
    public String[] serials;
    public MoveNetworkSmDevicesRequestBody withSerials(String[] serials) {
        this.serials = serials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wifiMacs")
    public String[] wifiMacs;
    public MoveNetworkSmDevicesRequestBody withWifiMacs(String[] wifiMacs) {
        this.wifiMacs = wifiMacs;
        return this;
    }
}