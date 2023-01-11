package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UrlMap
 * URL pattern and description of how the URL should be handled. App Engine can handle URLs by executing application code or by serving static files uploaded with the version, such as images, CSS, or JavaScript.
**/
public class UrlMap {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiEndpoint")
    public ApiEndpointHandler apiEndpoint;
    public UrlMap withApiEndpoint(ApiEndpointHandler apiEndpoint) {
        this.apiEndpoint = apiEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authFailAction")
    public UrlMapAuthFailActionEnum authFailAction;
    public UrlMap withAuthFailAction(UrlMapAuthFailActionEnum authFailAction) {
        this.authFailAction = authFailAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("login")
    public UrlMapLoginEnum login;
    public UrlMap withLogin(UrlMapLoginEnum login) {
        this.login = login;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirectHttpResponseCode")
    public UrlMapRedirectHttpResponseCodeEnum redirectHttpResponseCode;
    public UrlMap withRedirectHttpResponseCode(UrlMapRedirectHttpResponseCodeEnum redirectHttpResponseCode) {
        this.redirectHttpResponseCode = redirectHttpResponseCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public ScriptHandler script;
    public UrlMap withScript(ScriptHandler script) {
        this.script = script;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityLevel")
    public UrlMapSecurityLevelEnum securityLevel;
    public UrlMap withSecurityLevel(UrlMapSecurityLevelEnum securityLevel) {
        this.securityLevel = securityLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticFiles")
    public StaticFilesHandler staticFiles;
    public UrlMap withStaticFiles(StaticFilesHandler staticFiles) {
        this.staticFiles = staticFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlRegex")
    public String urlRegex;
    public UrlMap withUrlRegex(String urlRegex) {
        this.urlRegex = urlRegex;
        return this;
    }
}