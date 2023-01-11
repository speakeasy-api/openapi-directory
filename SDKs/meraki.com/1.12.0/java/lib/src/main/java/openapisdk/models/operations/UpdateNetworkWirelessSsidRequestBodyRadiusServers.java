package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidRequestBodyRadiusServers {
    @JsonProperty("host")
    public String host;
    public UpdateNetworkWirelessSsidRequestBodyRadiusServers withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public UpdateNetworkWirelessSsidRequestBodyRadiusServers withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radsecEnabled")
    public Boolean radsecEnabled;
    public UpdateNetworkWirelessSsidRequestBodyRadiusServers withRadsecEnabled(Boolean radsecEnabled) {
        this.radsecEnabled = radsecEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public UpdateNetworkWirelessSsidRequestBodyRadiusServers withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}