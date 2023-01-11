package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIpsIdActionsUnassignActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostFloatingIpsIdActionsUnassignActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostFloatingIpsIdActionsUnassignActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}