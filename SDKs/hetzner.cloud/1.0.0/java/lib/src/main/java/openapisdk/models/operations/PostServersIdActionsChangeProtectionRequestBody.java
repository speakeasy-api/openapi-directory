package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostServersIdActionsChangeProtectionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete")
    public Boolean delete;
    public PostServersIdActionsChangeProtectionRequestBody withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rebuild")
    public Boolean rebuild;
    public PostServersIdActionsChangeProtectionRequestBody withRebuild(Boolean rebuild) {
        this.rebuild = rebuild;
        return this;
    }
}