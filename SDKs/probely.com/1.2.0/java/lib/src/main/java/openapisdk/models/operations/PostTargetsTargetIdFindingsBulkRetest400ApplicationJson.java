package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostTargetsTargetIdFindingsBulkRetest400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public PostTargetsTargetIdFindingsBulkRetest400ApplicationJson withError(String error) {
        this.error = error;
        return this;
    }
}