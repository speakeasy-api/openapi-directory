package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NodeInheritedProperties {
    @JsonProperty("id")
    public String id;
    public NodeInheritedProperties withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("properties")
    public NodeInheritedPropertiesProperties[] properties;
    public NodeInheritedProperties withProperties(NodeInheritedPropertiesProperties[] properties) {
        this.properties = properties;
        return this;
    }
}