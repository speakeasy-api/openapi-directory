package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiConfigHandler
 * Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration for API handlers.
**/
public class ApiConfigHandler {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authFailAction")
    public ApiConfigHandlerAuthFailActionEnum authFailAction;
    public ApiConfigHandler withAuthFailAction(ApiConfigHandlerAuthFailActionEnum authFailAction) {
        this.authFailAction = authFailAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("login")
    public ApiConfigHandlerLoginEnum login;
    public ApiConfigHandler withLogin(ApiConfigHandlerLoginEnum login) {
        this.login = login;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public ApiConfigHandler withScript(String script) {
        this.script = script;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityLevel")
    public ApiConfigHandlerSecurityLevelEnum securityLevel;
    public ApiConfigHandler withSecurityLevel(ApiConfigHandlerSecurityLevelEnum securityLevel) {
        this.securityLevel = securityLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ApiConfigHandler withUrl(String url) {
        this.url = url;
        return this;
    }
}