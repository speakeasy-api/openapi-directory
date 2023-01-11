package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KerberosConfig
 * Configuration information for a Kerberos principal.
**/
public class KerberosConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keytab")
    public Secret keytab;
    public KerberosConfig withKeytab(Secret keytab) {
        this.keytab = keytab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("krb5ConfigGcsUri")
    public String krb5ConfigGcsUri;
    public KerberosConfig withKrb5ConfigGcsUri(String krb5ConfigGcsUri) {
        this.krb5ConfigGcsUri = krb5ConfigGcsUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principal")
    public String principal;
    public KerberosConfig withPrincipal(String principal) {
        this.principal = principal;
        return this;
    }
}