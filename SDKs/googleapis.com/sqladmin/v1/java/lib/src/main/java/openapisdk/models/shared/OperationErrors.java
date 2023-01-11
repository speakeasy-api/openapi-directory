package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OperationErrors
 * Database instance operation errors list wrapper.
**/
public class OperationErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public OperationError[] errors;
    public OperationErrors withErrors(OperationError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public OperationErrors withKind(String kind) {
        this.kind = kind;
        return this;
    }
}