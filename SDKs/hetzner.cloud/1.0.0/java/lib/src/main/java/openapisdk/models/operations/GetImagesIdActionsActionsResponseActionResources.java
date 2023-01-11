package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetImagesIdActionsActionsResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public GetImagesIdActionsActionsResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GetImagesIdActionsActionsResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}