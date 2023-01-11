package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDatacentersId200ApplicationJsonDatacenter {
    @JsonProperty("description")
    public String description;
    public GetDatacentersId200ApplicationJsonDatacenter withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetDatacentersId200ApplicationJsonDatacenter withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("location")
    public GetDatacentersId200ApplicationJsonDatacenterLocation location;
    public GetDatacentersId200ApplicationJsonDatacenter withLocation(GetDatacentersId200ApplicationJsonDatacenterLocation location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetDatacentersId200ApplicationJsonDatacenter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("server_types")
    public GetDatacentersId200ApplicationJsonDatacenterServerTypes serverTypes;
    public GetDatacentersId200ApplicationJsonDatacenter withServerTypes(GetDatacentersId200ApplicationJsonDatacenterServerTypes serverTypes) {
        this.serverTypes = serverTypes;
        return this;
    }
}