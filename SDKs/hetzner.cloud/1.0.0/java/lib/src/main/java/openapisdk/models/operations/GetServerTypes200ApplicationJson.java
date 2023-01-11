package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServerTypes200ApplicationJson {
    @JsonProperty("server_types")
    public GetServerTypes200ApplicationJsonServerTypes[] serverTypes;
    public GetServerTypes200ApplicationJson withServerTypes(GetServerTypes200ApplicationJsonServerTypes[] serverTypes) {
        this.serverTypes = serverTypes;
        return this;
    }
}