package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDatacenters200ApplicationJsonDatacenters {
    @JsonProperty("description")
    public String description;
    public GetDatacenters200ApplicationJsonDatacenters withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetDatacenters200ApplicationJsonDatacenters withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("location")
    public GetDatacenters200ApplicationJsonDatacentersLocation location;
    public GetDatacenters200ApplicationJsonDatacenters withLocation(GetDatacenters200ApplicationJsonDatacentersLocation location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetDatacenters200ApplicationJsonDatacenters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("server_types")
    public GetDatacenters200ApplicationJsonDatacentersServerTypes serverTypes;
    public GetDatacenters200ApplicationJsonDatacenters withServerTypes(GetDatacenters200ApplicationJsonDatacentersServerTypes serverTypes) {
        this.serverTypes = serverTypes;
        return this;
    }
}