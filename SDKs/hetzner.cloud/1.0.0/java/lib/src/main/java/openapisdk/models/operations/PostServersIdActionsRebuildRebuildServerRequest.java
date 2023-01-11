package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsRebuildRebuildServerRequest {
    @JsonProperty("image")
    public String image;
    public PostServersIdActionsRebuildRebuildServerRequest withImage(String image) {
        this.image = image;
        return this;
    }
}