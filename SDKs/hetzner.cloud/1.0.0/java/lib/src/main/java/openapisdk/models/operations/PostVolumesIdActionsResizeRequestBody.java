package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostVolumesIdActionsResizeRequestBody {
    @JsonProperty("size")
    public Double size;
    public PostVolumesIdActionsResizeRequestBody withSize(Double size) {
        this.size = size;
        return this;
    }
}