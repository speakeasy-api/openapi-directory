package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers {
    @JsonProperty("host")
    public String host;
    public UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers withPort(Long port) {
        this.port = port;
        return this;
    }
}