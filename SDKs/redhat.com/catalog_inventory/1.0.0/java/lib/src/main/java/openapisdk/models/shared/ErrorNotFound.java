package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ErrorNotFound {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public ErrorNotFoundErrors[] errors;
    public ErrorNotFound withErrors(ErrorNotFoundErrors[] errors) {
        this.errors = errors;
        return this;
    }
}