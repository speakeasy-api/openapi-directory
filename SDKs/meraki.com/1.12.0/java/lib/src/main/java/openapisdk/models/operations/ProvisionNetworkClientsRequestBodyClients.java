package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProvisionNetworkClientsRequestBodyClients {
    @JsonProperty("mac")
    public String mac;
    public ProvisionNetworkClientsRequestBodyClients withMac(String mac) {
        this.mac = mac;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProvisionNetworkClientsRequestBodyClients withName(String name) {
        this.name = name;
        return this;
    }
}