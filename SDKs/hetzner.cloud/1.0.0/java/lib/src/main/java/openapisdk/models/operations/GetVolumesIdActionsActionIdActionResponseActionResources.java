package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetVolumesIdActionsActionIdActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public GetVolumesIdActionsActionIdActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GetVolumesIdActionsActionIdActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}