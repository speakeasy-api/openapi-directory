package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers {
    @JsonProperty("host")
    public String host;
    public CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonProperty("port")
    public Long port;
    public CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonProperty("secret")
    public String secret;
    public CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}