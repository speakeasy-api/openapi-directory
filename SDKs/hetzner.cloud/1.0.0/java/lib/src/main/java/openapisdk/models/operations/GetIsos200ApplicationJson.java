package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetIsos200ApplicationJson {
    @JsonProperty("isos")
    public GetIsos200ApplicationJsonIsos[] isos;
    public GetIsos200ApplicationJson withIsos(GetIsos200ApplicationJsonIsos[] isos) {
        this.isos = isos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetIsos200ApplicationJsonMeta meta;
    public GetIsos200ApplicationJson withMeta(GetIsos200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}