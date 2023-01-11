package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ModifyNetworkSmDevicesTagsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String[] ids;
    public ModifyNetworkSmDevicesTagsRequestBody withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String[] scope;
    public ModifyNetworkSmDevicesTagsRequestBody withScope(String[] scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serials")
    public String[] serials;
    public ModifyNetworkSmDevicesTagsRequestBody withSerials(String[] serials) {
        this.serials = serials;
        return this;
    }
    @JsonProperty("tags")
    public String[] tags;
    public ModifyNetworkSmDevicesTagsRequestBody withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("updateAction")
    public String updateAction;
    public ModifyNetworkSmDevicesTagsRequestBody withUpdateAction(String updateAction) {
        this.updateAction = updateAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wifiMacs")
    public String[] wifiMacs;
    public ModifyNetworkSmDevicesTagsRequestBody withWifiMacs(String[] wifiMacs) {
        this.wifiMacs = wifiMacs;
        return this;
    }
}