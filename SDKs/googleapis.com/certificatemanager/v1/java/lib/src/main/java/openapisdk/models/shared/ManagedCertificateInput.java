package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManagedCertificateInput
 * Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
**/
public class ManagedCertificateInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsAuthorizations")
    public String[] dnsAuthorizations;
    public ManagedCertificateInput withDnsAuthorizations(String[] dnsAuthorizations) {
        this.dnsAuthorizations = dnsAuthorizations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public String[] domains;
    public ManagedCertificateInput withDomains(String[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuanceConfig")
    public String issuanceConfig;
    public ManagedCertificateInput withIssuanceConfig(String issuanceConfig) {
        this.issuanceConfig = issuanceConfig;
        return this;
    }
}