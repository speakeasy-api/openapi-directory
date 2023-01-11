package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServerTypesId200ApplicationJson {
    @JsonProperty("server_type")
    public GetServerTypesId200ApplicationJsonServerType serverType;
    public GetServerTypesId200ApplicationJson withServerType(GetServerTypesId200ApplicationJsonServerType serverType) {
        this.serverType = serverType;
        return this;
    }
}