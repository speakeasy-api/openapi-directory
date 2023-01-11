package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetVolumesIdActionsActionsResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public GetVolumesIdActionsActionsResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GetVolumesIdActionsActionsResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}