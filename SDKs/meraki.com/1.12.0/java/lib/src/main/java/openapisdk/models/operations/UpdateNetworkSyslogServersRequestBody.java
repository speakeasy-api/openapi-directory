package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSyslogServersRequestBody {
    @JsonProperty("servers")
    public UpdateNetworkSyslogServersRequestBodyServers[] servers;
    public UpdateNetworkSyslogServersRequestBody withServers(UpdateNetworkSyslogServersRequestBodyServers[] servers) {
        this.servers = servers;
        return this;
    }
}