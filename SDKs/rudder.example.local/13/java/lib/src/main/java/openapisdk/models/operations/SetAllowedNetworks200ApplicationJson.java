package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetAllowedNetworks200ApplicationJson {
    @JsonProperty("action")
    public SetAllowedNetworks200ApplicationJsonActionEnum action;
    public SetAllowedNetworks200ApplicationJson withAction(SetAllowedNetworks200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public SetAllowedNetworks200ApplicationJsonData data;
    public SetAllowedNetworks200ApplicationJson withData(SetAllowedNetworks200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SetAllowedNetworks200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("result")
    public SetAllowedNetworks200ApplicationJsonResultEnum result;
    public SetAllowedNetworks200ApplicationJson withResult(SetAllowedNetworks200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}