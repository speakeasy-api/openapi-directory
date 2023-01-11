package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorProto
 * Describes one specific error.
**/
public class ErrorProto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("argument")
    public String[] argument;
    public ErrorProto withArgument(String[] argument) {
        this.argument = argument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public ErrorProto withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debugInfo")
    public String debugInfo;
    public ErrorProto withDebugInfo(String debugInfo) {
        this.debugInfo = debugInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public ErrorProto withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalErrorMessage")
    public String externalErrorMessage;
    public ErrorProto withExternalErrorMessage(String externalErrorMessage) {
        this.externalErrorMessage = externalErrorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public ErrorProto withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationType")
    public ErrorProtoLocationTypeEnum locationType;
    public ErrorProto withLocationType(ErrorProtoLocationTypeEnum locationType) {
        this.locationType = locationType;
        return this;
    }
}