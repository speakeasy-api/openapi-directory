package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutFloatingIpsId200ApplicationJson {
    @JsonProperty("floating_ip")
    public PutFloatingIpsId200ApplicationJsonFloatingIp floatingIp;
    public PutFloatingIpsId200ApplicationJson withFloatingIp(PutFloatingIpsId200ApplicationJsonFloatingIp floatingIp) {
        this.floatingIp = floatingIp;
        return this;
    }
}