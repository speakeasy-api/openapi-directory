package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRole200ApplicationJsonData {
    @JsonProperty("id")
    public GetRole200ApplicationJsonDataIdEnum id;
    public GetRole200ApplicationJsonData withId(GetRole200ApplicationJsonDataIdEnum id) {
        this.id = id;
        return this;
    }
    @JsonProperty("rights")
    public GetRole200ApplicationJsonDataRightsEnum[] rights;
    public GetRole200ApplicationJsonData withRights(GetRole200ApplicationJsonDataRightsEnum[] rights) {
        this.rights = rights;
        return this;
    }
}