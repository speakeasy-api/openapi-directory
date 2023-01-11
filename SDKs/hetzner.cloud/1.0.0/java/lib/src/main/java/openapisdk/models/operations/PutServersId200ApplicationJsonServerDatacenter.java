package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutServersId200ApplicationJsonServerDatacenter
 * Datacenter this Resource is located at
**/
public class PutServersId200ApplicationJsonServerDatacenter {
    @JsonProperty("description")
    public String description;
    public PutServersId200ApplicationJsonServerDatacenter withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PutServersId200ApplicationJsonServerDatacenter withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("location")
    public PutServersId200ApplicationJsonServerDatacenterLocation location;
    public PutServersId200ApplicationJsonServerDatacenter withLocation(PutServersId200ApplicationJsonServerDatacenterLocation location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutServersId200ApplicationJsonServerDatacenter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("server_types")
    public PutServersId200ApplicationJsonServerDatacenterServerTypes serverTypes;
    public PutServersId200ApplicationJsonServerDatacenter withServerTypes(PutServersId200ApplicationJsonServerDatacenterServerTypes serverTypes) {
        this.serverTypes = serverTypes;
        return this;
    }
}