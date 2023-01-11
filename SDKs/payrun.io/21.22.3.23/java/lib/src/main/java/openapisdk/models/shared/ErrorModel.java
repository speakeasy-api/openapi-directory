package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ErrorModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorModel")
    public ErrorModelErrorModel errorModel;
    public ErrorModel withErrorModel(ErrorModelErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
}