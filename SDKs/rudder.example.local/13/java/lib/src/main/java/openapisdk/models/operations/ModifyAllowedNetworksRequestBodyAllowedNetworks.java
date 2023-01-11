package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ModifyAllowedNetworksRequestBodyAllowedNetworks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public Object[] add;
    public ModifyAllowedNetworksRequestBodyAllowedNetworks withAdd(Object[] add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete")
    public Object[] delete;
    public ModifyAllowedNetworksRequestBodyAllowedNetworks withDelete(Object[] delete) {
        this.delete = delete;
        return this;
    }
}