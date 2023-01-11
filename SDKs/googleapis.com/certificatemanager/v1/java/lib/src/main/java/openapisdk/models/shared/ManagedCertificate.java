package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManagedCertificate
 * Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
**/
public class ManagedCertificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizationAttemptInfo")
    public AuthorizationAttemptInfo[] authorizationAttemptInfo;
    public ManagedCertificate withAuthorizationAttemptInfo(AuthorizationAttemptInfo[] authorizationAttemptInfo) {
        this.authorizationAttemptInfo = authorizationAttemptInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsAuthorizations")
    public String[] dnsAuthorizations;
    public ManagedCertificate withDnsAuthorizations(String[] dnsAuthorizations) {
        this.dnsAuthorizations = dnsAuthorizations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public String[] domains;
    public ManagedCertificate withDomains(String[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuanceConfig")
    public String issuanceConfig;
    public ManagedCertificate withIssuanceConfig(String issuanceConfig) {
        this.issuanceConfig = issuanceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisioningIssue")
    public ProvisioningIssue provisioningIssue;
    public ManagedCertificate withProvisioningIssue(ProvisioningIssue provisioningIssue) {
        this.provisioningIssue = provisioningIssue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ManagedCertificateStateEnum state;
    public ManagedCertificate withState(ManagedCertificateStateEnum state) {
        this.state = state;
        return this;
    }
}