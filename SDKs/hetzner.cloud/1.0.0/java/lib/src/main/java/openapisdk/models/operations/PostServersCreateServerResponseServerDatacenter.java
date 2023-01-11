package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersCreateServerResponseServerDatacenter
 * Datacenter this Resource is located at
**/
public class PostServersCreateServerResponseServerDatacenter {
    @JsonProperty("description")
    public String description;
    public PostServersCreateServerResponseServerDatacenter withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersCreateServerResponseServerDatacenter withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("location")
    public PostServersCreateServerResponseServerDatacenterLocation location;
    public PostServersCreateServerResponseServerDatacenter withLocation(PostServersCreateServerResponseServerDatacenterLocation location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostServersCreateServerResponseServerDatacenter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("server_types")
    public PostServersCreateServerResponseServerDatacenterServerTypes serverTypes;
    public PostServersCreateServerResponseServerDatacenter withServerTypes(PostServersCreateServerResponseServerDatacenterServerTypes serverTypes) {
        this.serverTypes = serverTypes;
        return this;
    }
}