package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointConfig
 * Endpoint config for this cluster
**/
public class EndpointConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableHttpPortAccess")
    public Boolean enableHttpPortAccess;
    public EndpointConfig withEnableHttpPortAccess(Boolean enableHttpPortAccess) {
        this.enableHttpPortAccess = enableHttpPortAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpPorts")
    public java.util.Map<String, String> httpPorts;
    public EndpointConfig withHttpPorts(java.util.Map<String, String> httpPorts) {
        this.httpPorts = httpPorts;
        return this;
    }
}