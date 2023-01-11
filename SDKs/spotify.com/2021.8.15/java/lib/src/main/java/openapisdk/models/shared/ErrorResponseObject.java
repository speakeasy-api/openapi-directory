package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ErrorResponseObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ErrorObject error;
    public ErrorResponseObject withError(ErrorObject error) {
        this.error = error;
        return this;
    }
}