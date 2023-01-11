package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateAuthorityConfig
 * The CA that issues the workload certificate. It includes CA address, type, authentication to CA service, etc.
**/
public class CertificateAuthorityConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateAuthorityServiceConfig")
    public CertificateAuthorityServiceConfig certificateAuthorityServiceConfig;
    public CertificateAuthorityConfig withCertificateAuthorityServiceConfig(CertificateAuthorityServiceConfig certificateAuthorityServiceConfig) {
        this.certificateAuthorityServiceConfig = certificateAuthorityServiceConfig;
        return this;
    }
}