package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTargetsTargetIdScansRetrievePage200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public GetTargetsTargetIdScansRetrievePage200ApplicationJson withPage(Long page) {
        this.page = page;
        return this;
    }
}