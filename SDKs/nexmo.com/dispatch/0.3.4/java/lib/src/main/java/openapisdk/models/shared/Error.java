package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error
 * The error format is standardized to the 4xx/5xx range with a code and a human readable explanation.
**/
public class Error {
    @JsonProperty("detail")
    public String detail;
    public Error withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public Error withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalid_parameters")
    public ErrorInvalidParameters invalidParameters;
    public Error withInvalidParameters(ErrorInvalidParameters invalidParameters) {
        this.invalidParameters = invalidParameters;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Error withType(String type) {
        this.type = type;
        return this;
    }
}