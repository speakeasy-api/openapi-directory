package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetApiV2ListMarkets404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public java.util.Map<String, Object> errors;
    public GetApiV2ListMarkets404ApplicationJson withErrors(java.util.Map<String, Object> errors) {
        this.errors = errors;
        return this;
    }
}