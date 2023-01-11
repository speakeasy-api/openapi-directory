package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GroupProperties {
    @JsonProperty("name")
    public String name;
    public GroupProperties withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("value")
    public Object value;
    public GroupProperties withValue(Object value) {
        this.value = value;
        return this;
    }
}