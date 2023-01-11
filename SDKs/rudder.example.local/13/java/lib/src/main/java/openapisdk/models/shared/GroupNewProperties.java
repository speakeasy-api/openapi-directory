package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GroupNewProperties {
    @JsonProperty("name")
    public String name;
    public GroupNewProperties withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("value")
    public Object value;
    public GroupNewProperties withValue(Object value) {
        this.value = value;
        return this;
    }
}