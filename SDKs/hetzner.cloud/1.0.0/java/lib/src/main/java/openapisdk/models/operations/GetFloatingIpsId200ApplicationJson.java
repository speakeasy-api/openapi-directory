package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFloatingIpsId200ApplicationJson {
    @JsonProperty("floating_ip")
    public GetFloatingIpsId200ApplicationJsonFloatingIp floatingIp;
    public GetFloatingIpsId200ApplicationJson withFloatingIp(GetFloatingIpsId200ApplicationJsonFloatingIp floatingIp) {
        this.floatingIp = floatingIp;
        return this;
    }
}