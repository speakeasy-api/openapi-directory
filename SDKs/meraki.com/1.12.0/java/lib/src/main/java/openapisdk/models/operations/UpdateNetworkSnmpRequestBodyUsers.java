package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSnmpRequestBodyUsers {
    @JsonProperty("passphrase")
    public String passphrase;
    public UpdateNetworkSnmpRequestBodyUsers withPassphrase(String passphrase) {
        this.passphrase = passphrase;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public UpdateNetworkSnmpRequestBodyUsers withUsername(String username) {
        this.username = username;
        return this;
    }
}