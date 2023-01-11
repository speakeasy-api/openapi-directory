package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFloatingIpsIdActions200ApplicationJsonActionResources {
    @JsonProperty("id")
    public Long id;
    public GetFloatingIpsIdActions200ApplicationJsonActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GetFloatingIpsIdActions200ApplicationJsonActionResources withType(String type) {
        this.type = type;
        return this;
    }
}