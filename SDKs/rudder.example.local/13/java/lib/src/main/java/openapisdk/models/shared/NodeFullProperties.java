package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NodeFullProperties {
    @JsonProperty("name")
    public String name;
    public NodeFullProperties withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("value")
    public Object value;
    public NodeFullProperties withValue(Object value) {
        this.value = value;
        return this;
    }
}