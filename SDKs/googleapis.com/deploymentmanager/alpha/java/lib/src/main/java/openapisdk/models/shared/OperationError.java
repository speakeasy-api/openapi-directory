package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OperationError
 * [Output Only] If errors are generated during processing of the operation, this field will be populated.
**/
public class OperationError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public OperationErrorErrors[] errors;
    public OperationError withErrors(OperationErrorErrors[] errors) {
        this.errors = errors;
        return this;
    }
}