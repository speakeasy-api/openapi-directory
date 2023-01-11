package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NodeSettingsProperties {
    @JsonProperty("name")
    public String name;
    public NodeSettingsProperties withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("value")
    public Object value;
    public NodeSettingsProperties withValue(Object value) {
        this.value = value;
        return this;
    }
}