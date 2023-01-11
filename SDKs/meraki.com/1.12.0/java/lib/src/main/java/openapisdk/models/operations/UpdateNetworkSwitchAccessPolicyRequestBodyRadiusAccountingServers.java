package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers {
    @JsonProperty("host")
    public String host;
    public UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonProperty("port")
    public Long port;
    public UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonProperty("secret")
    public String secret;
    public UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}