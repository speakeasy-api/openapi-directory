package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers {
    @JsonProperty("host")
    public String host;
    public UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radsecEnabled")
    public Boolean radsecEnabled;
    public UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers withRadsecEnabled(Boolean radsecEnabled) {
        this.radsecEnabled = radsecEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}