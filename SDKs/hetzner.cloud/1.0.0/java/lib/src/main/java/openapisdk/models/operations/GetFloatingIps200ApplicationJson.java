package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFloatingIps200ApplicationJson {
    @JsonProperty("floating_ips")
    public GetFloatingIps200ApplicationJsonFloatingIps[] floatingIps;
    public GetFloatingIps200ApplicationJson withFloatingIps(GetFloatingIps200ApplicationJsonFloatingIps[] floatingIps) {
        this.floatingIps = floatingIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetFloatingIps200ApplicationJsonMeta meta;
    public GetFloatingIps200ApplicationJson withMeta(GetFloatingIps200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}