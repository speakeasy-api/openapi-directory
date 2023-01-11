package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostImagesIdActionsChangeProtectionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete")
    public Boolean delete;
    public PostImagesIdActionsChangeProtectionRequestBody withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}