package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorMessageParams
 * Invalid message parameters
**/
public class ErrorMessageParams {
    @JsonProperty("detail")
    public String detail;
    public ErrorMessageParams withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ErrorMessageParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalid_parameters")
    public ErrorMessageParamsInvalidParameters[] invalidParameters;
    public ErrorMessageParams withInvalidParameters(ErrorMessageParamsInvalidParameters[] invalidParameters) {
        this.invalidParameters = invalidParameters;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorMessageParams withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorMessageParams withType(String type) {
        this.type = type;
        return this;
    }
}