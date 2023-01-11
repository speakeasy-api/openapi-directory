package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ComponentVersion
 * A component ID and version
**/
public class ComponentVersion {
    @JsonProperty("id")
    public String id;
    public ComponentVersion withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public ComponentVersion withVersion(String version) {
        this.version = version;
        return this;
    }
}