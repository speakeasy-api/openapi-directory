package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UriOverride
 * Uri Override. When specified, all the HTTP tasks inside the queue will be partially or fully overridden depending on the configured values.
**/
public class UriOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public UriOverride withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public UriOverride withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public String port;
    public UriOverride withPort(String port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;
    public UriOverride withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheme")
    public UriOverrideSchemeEnum scheme;
    public UriOverride withScheme(UriOverrideSchemeEnum scheme) {
        this.scheme = scheme;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uriOverrideEnforceMode")
    public UriOverrideUriOverrideEnforceModeEnum uriOverrideEnforceMode;
    public UriOverride withUriOverrideEnforceMode(UriOverrideUriOverrideEnforceModeEnum uriOverrideEnforceMode) {
        this.uriOverrideEnforceMode = uriOverrideEnforceMode;
        return this;
    }
}