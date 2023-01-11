package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainProvisioning
 * The current certificate provisioning status information for a domain.
**/
public class DomainProvisioning {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certChallengeDiscoveredTxt")
    public String[] certChallengeDiscoveredTxt;
    public DomainProvisioning withCertChallengeDiscoveredTxt(String[] certChallengeDiscoveredTxt) {
        this.certChallengeDiscoveredTxt = certChallengeDiscoveredTxt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certChallengeDns")
    public CertDnsChallenge certChallengeDns;
    public DomainProvisioning withCertChallengeDns(CertDnsChallenge certChallengeDns) {
        this.certChallengeDns = certChallengeDns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certChallengeHttp")
    public CertHttpChallenge certChallengeHttp;
    public DomainProvisioning withCertChallengeHttp(CertHttpChallenge certChallengeHttp) {
        this.certChallengeHttp = certChallengeHttp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certStatus")
    public DomainProvisioningCertStatusEnum certStatus;
    public DomainProvisioning withCertStatus(DomainProvisioningCertStatusEnum certStatus) {
        this.certStatus = certStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discoveredIps")
    public String[] discoveredIps;
    public DomainProvisioning withDiscoveredIps(String[] discoveredIps) {
        this.discoveredIps = discoveredIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsFetchTime")
    public String dnsFetchTime;
    public DomainProvisioning withDnsFetchTime(String dnsFetchTime) {
        this.dnsFetchTime = dnsFetchTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsStatus")
    public DomainProvisioningDnsStatusEnum dnsStatus;
    public DomainProvisioning withDnsStatus(DomainProvisioningDnsStatusEnum dnsStatus) {
        this.dnsStatus = dnsStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedIps")
    public String[] expectedIps;
    public DomainProvisioning withExpectedIps(String[] expectedIps) {
        this.expectedIps = expectedIps;
        return this;
    }
}