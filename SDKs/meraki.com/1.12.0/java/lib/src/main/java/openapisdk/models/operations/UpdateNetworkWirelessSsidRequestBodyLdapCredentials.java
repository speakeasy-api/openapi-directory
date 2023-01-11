package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidRequestBodyLdapCredentials
 * (Optional) The credentials of the user account to be used by the AP to bind to your LDAP server. The LDAP account should have permissions on all your LDAP servers.
**/
public class UpdateNetworkWirelessSsidRequestBodyLdapCredentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distinguishedName")
    public String distinguishedName;
    public UpdateNetworkWirelessSsidRequestBodyLdapCredentials withDistinguishedName(String distinguishedName) {
        this.distinguishedName = distinguishedName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public UpdateNetworkWirelessSsidRequestBodyLdapCredentials withPassword(String password) {
        this.password = password;
        return this;
    }
}