package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServers200ApplicationJsonServersDatacenter
 * Datacenter this Resource is located at
**/
public class GetServers200ApplicationJsonServersDatacenter {
    @JsonProperty("description")
    public String description;
    public GetServers200ApplicationJsonServersDatacenter withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetServers200ApplicationJsonServersDatacenter withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("location")
    public GetServers200ApplicationJsonServersDatacenterLocation location;
    public GetServers200ApplicationJsonServersDatacenter withLocation(GetServers200ApplicationJsonServersDatacenterLocation location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServers200ApplicationJsonServersDatacenter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("server_types")
    public GetServers200ApplicationJsonServersDatacenterServerTypes serverTypes;
    public GetServers200ApplicationJsonServersDatacenter withServerTypes(GetServers200ApplicationJsonServersDatacenterServerTypes serverTypes) {
        this.serverTypes = serverTypes;
        return this;
    }
}