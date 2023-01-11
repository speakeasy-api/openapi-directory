package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetNetworks200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetNetworks200ApplicationJsonMeta meta;
    public GetNetworks200ApplicationJson withMeta(GetNetworks200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("networks")
    public GetNetworks200ApplicationJsonNetworks[] networks;
    public GetNetworks200ApplicationJson withNetworks(GetNetworks200ApplicationJsonNetworks[] networks) {
        this.networks = networks;
        return this;
    }
}