package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorChannelParams
 * Invalid channel parameters
**/
public class ErrorChannelParams {
    @JsonProperty("detail")
    public String detail;
    public ErrorChannelParams withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ErrorChannelParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalid_parameters")
    public ErrorChannelParamsInvalidParameters[] invalidParameters;
    public ErrorChannelParams withInvalidParameters(ErrorChannelParamsInvalidParameters[] invalidParameters) {
        this.invalidParameters = invalidParameters;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorChannelParams withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorChannelParams withType(String type) {
        this.type = type;
        return this;
    }
}