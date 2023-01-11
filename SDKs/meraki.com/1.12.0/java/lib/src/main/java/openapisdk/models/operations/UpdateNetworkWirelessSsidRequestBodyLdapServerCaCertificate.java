package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate
 * The CA certificate used to sign the LDAP server's key.
**/
public class UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contents")
    public String contents;
    public UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate withContents(String contents) {
        this.contents = contents;
        return this;
    }
}