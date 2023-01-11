package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecurityConfig
 * Security related configuration, including encryption, Kerberos, etc.
**/
public class SecurityConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityConfig")
    public IdentityConfig identityConfig;
    public SecurityConfig withIdentityConfig(IdentityConfig identityConfig) {
        this.identityConfig = identityConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kerberosConfig")
    public KerberosConfig kerberosConfig;
    public SecurityConfig withKerberosConfig(KerberosConfig kerberosConfig) {
        this.kerberosConfig = kerberosConfig;
        return this;
    }
}