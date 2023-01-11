package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSyslogServersRequestBodyServers {
    @JsonProperty("host")
    public String host;
    public UpdateNetworkSyslogServersRequestBodyServers withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonProperty("port")
    public Long port;
    public UpdateNetworkSyslogServersRequestBodyServers withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonProperty("roles")
    public String[] roles;
    public UpdateNetworkSyslogServersRequestBodyServers withRoles(String[] roles) {
        this.roles = roles;
        return this;
    }
}