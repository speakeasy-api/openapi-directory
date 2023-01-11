package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFloatingIpsIdActions200ApplicationJson {
    @JsonProperty("actions")
    public GetFloatingIpsIdActions200ApplicationJsonAction[] actions;
    public GetFloatingIpsIdActions200ApplicationJson withActions(GetFloatingIpsIdActions200ApplicationJsonAction[] actions) {
        this.actions = actions;
        return this;
    }
}