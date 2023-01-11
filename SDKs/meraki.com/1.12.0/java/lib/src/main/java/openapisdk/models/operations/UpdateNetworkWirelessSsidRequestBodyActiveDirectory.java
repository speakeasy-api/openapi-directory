package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidRequestBodyActiveDirectory
 * The current setting for Active Directory. Only valid if splashPage is 'Password-protected with Active Directory'
**/
public class UpdateNetworkWirelessSsidRequestBodyActiveDirectory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentials")
    public UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials credentials;
    public UpdateNetworkWirelessSsidRequestBodyActiveDirectory withCredentials(UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servers")
    public UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers[] servers;
    public UpdateNetworkWirelessSsidRequestBodyActiveDirectory withServers(UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers[] servers) {
        this.servers = servers;
        return this;
    }
}