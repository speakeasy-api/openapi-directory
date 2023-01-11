package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubordinateConfig
 * Describes a subordinate CA's issuers. This is either a resource name to a known issuing CertificateAuthority, or a PEM issuer certificate chain.
**/
public class SubordinateConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateAuthority")
    public String certificateAuthority;
    public SubordinateConfig withCertificateAuthority(String certificateAuthority) {
        this.certificateAuthority = certificateAuthority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pemIssuerChain")
    public SubordinateConfigChain pemIssuerChain;
    public SubordinateConfig withPemIssuerChain(SubordinateConfigChain pemIssuerChain) {
        this.pemIssuerChain = pemIssuerChain;
        return this;
    }
}