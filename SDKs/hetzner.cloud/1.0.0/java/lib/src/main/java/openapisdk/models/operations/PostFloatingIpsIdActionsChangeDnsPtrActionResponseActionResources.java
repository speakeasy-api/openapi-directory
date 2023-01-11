package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}