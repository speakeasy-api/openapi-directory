package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidRequestBodyLdap
 * The current setting for LDAP. Only valid if splashPage is 'Password-protected with LDAP'.
**/
public class UpdateNetworkWirelessSsidRequestBodyLdap {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseDistinguishedName")
    public String baseDistinguishedName;
    public UpdateNetworkWirelessSsidRequestBodyLdap withBaseDistinguishedName(String baseDistinguishedName) {
        this.baseDistinguishedName = baseDistinguishedName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentials")
    public UpdateNetworkWirelessSsidRequestBodyLdapCredentials credentials;
    public UpdateNetworkWirelessSsidRequestBodyLdap withCredentials(UpdateNetworkWirelessSsidRequestBodyLdapCredentials credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverCaCertificate")
    public UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate serverCaCertificate;
    public UpdateNetworkWirelessSsidRequestBodyLdap withServerCaCertificate(UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate serverCaCertificate) {
        this.serverCaCertificate = serverCaCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servers")
    public UpdateNetworkWirelessSsidRequestBodyLdapServers[] servers;
    public UpdateNetworkWirelessSsidRequestBodyLdap withServers(UpdateNetworkWirelessSsidRequestBodyLdapServers[] servers) {
        this.servers = servers;
        return this;
    }
}