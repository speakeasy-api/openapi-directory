package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CheckinNetworkSmDevicesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String[] ids;
    public CheckinNetworkSmDevicesRequestBody withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String[] scope;
    public CheckinNetworkSmDevicesRequestBody withScope(String[] scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serials")
    public String[] serials;
    public CheckinNetworkSmDevicesRequestBody withSerials(String[] serials) {
        this.serials = serials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wifiMacs")
    public String[] wifiMacs;
    public CheckinNetworkSmDevicesRequestBody withWifiMacs(String[] wifiMacs) {
        this.wifiMacs = wifiMacs;
        return this;
    }
}