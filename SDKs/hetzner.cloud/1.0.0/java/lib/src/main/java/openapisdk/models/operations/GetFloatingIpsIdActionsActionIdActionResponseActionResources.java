package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFloatingIpsIdActionsActionIdActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public GetFloatingIpsIdActionsActionIdActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GetFloatingIpsIdActionsActionIdActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}