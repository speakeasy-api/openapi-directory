package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServersId200ApplicationJsonServerDatacenter
 * Datacenter this Resource is located at
**/
public class GetServersId200ApplicationJsonServerDatacenter {
    @JsonProperty("description")
    public String description;
    public GetServersId200ApplicationJsonServerDatacenter withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetServersId200ApplicationJsonServerDatacenter withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("location")
    public GetServersId200ApplicationJsonServerDatacenterLocation location;
    public GetServersId200ApplicationJsonServerDatacenter withLocation(GetServersId200ApplicationJsonServerDatacenterLocation location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServersId200ApplicationJsonServerDatacenter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("server_types")
    public GetServersId200ApplicationJsonServerDatacenterServerTypes serverTypes;
    public GetServersId200ApplicationJsonServerDatacenter withServerTypes(GetServersId200ApplicationJsonServerDatacenterServerTypes serverTypes) {
        this.serverTypes = serverTypes;
        return this;
    }
}