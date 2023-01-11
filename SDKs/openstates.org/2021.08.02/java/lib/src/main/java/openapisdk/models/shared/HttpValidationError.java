package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HttpValidationError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public ValidationError[] detail;
    public HttpValidationError withDetail(ValidationError[] detail) {
        this.detail = detail;
        return this;
    }
}