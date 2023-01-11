package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}