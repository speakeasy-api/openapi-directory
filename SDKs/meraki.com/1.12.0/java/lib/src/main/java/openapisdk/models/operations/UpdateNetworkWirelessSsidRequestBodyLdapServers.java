package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkWirelessSsidRequestBodyLdapServers {
    @JsonProperty("host")
    public String host;
    public UpdateNetworkWirelessSsidRequestBodyLdapServers withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonProperty("port")
    public Long port;
    public UpdateNetworkWirelessSsidRequestBodyLdapServers withPort(Long port) {
        this.port = port;
        return this;
    }
}