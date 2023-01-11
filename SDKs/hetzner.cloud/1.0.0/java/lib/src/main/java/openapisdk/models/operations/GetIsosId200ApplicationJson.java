package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetIsosId200ApplicationJson {
    @JsonProperty("iso")
    public GetIsosId200ApplicationJsonIso iso;
    public GetIsosId200ApplicationJson withIso(GetIsosId200ApplicationJsonIso iso) {
        this.iso = iso;
        return this;
    }
}