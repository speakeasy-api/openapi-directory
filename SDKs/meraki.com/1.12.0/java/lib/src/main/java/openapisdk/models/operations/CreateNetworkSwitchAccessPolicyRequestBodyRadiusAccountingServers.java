package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers {
    @JsonProperty("host")
    public String host;
    public CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonProperty("port")
    public Long port;
    public CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonProperty("secret")
    public String secret;
    public CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}