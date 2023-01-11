package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainVerificationDetailCertificateAuthorityAuthorization
 * Contains information about the last Certificate Authority Authorization (CAA) Lookup details for the specified domain.
 * 
 * In order for a domain to be eligible to be included in the certificate, the entire domain hierarchy must be scanned for DNS CAA records, as outlined by RFC 6844.
 * 
 * The absence of any CAA records found in the domain hierarchy indicates that the domain may be included in the certificate. Alternatively, if CAA records are found when scanning the domain hierarchy, the domain may be included in the certificate as long as `godaddy.com` or `starfieldtech.com` is found in the DNS record value. However, if CAA records are found, yet `godaddy.com` or `starfieldtech.com` is not found in any CAA record's value, then we must drop the domain from the certificate request.
 * 
 * In the case where there are repeated DNS errors when scanning the domain hierarchy for CAA records, thus ending in an unsuccessful scan, then the domain can still be included in the certificate provided the primary domain is not setup with DNSSEC. Conversely, if DNSSEC is found to be setup on the primary domain when scanning following repeated CAA failures, the domain must be dropped from the certificate request. Finally, if DNS errors persist to the point where a successful DNSSEC query could not be obtained, then the domain must be dropped from the certificate request.
 * 
**/
public class DomainVerificationDetailCertificateAuthorityAuthorization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completedAt")
    public String completedAt;
    public DomainVerificationDetailCertificateAuthorityAuthorization withCompletedAt(String completedAt) {
        this.completedAt = completedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryPaths")
    public String[] queryPaths;
    public DomainVerificationDetailCertificateAuthorityAuthorization withQueryPaths(String[] queryPaths) {
        this.queryPaths = queryPaths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendations")
    public DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum[] recommendations;
    public DomainVerificationDetailCertificateAuthorityAuthorization withRecommendations(DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum[] recommendations) {
        this.recommendations = recommendations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum status;
    public DomainVerificationDetailCertificateAuthorityAuthorization withStatus(DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum status) {
        this.status = status;
        return this;
    }
}