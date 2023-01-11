package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ModifyAllowedNetworks200ApplicationJson {
    @JsonProperty("action")
    public ModifyAllowedNetworks200ApplicationJsonActionEnum action;
    public ModifyAllowedNetworks200ApplicationJson withAction(ModifyAllowedNetworks200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ModifyAllowedNetworks200ApplicationJsonData data;
    public ModifyAllowedNetworks200ApplicationJson withData(ModifyAllowedNetworks200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ModifyAllowedNetworks200ApplicationJsonResultEnum result;
    public ModifyAllowedNetworks200ApplicationJson withResult(ModifyAllowedNetworks200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}