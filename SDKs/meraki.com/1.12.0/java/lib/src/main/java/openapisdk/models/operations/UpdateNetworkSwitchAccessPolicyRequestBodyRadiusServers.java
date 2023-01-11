package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers {
    @JsonProperty("host")
    public String host;
    public UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonProperty("port")
    public Long port;
    public UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonProperty("secret")
    public String secret;
    public UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}