package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DomainVerificationDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateAuthorityAuthorization")
    public DomainVerificationDetailCertificateAuthorityAuthorization certificateAuthorityAuthorization;
    public DomainVerificationDetail withCertificateAuthorityAuthorization(DomainVerificationDetailCertificateAuthorityAuthorization certificateAuthorityAuthorization) {
        this.certificateAuthorityAuthorization = certificateAuthorityAuthorization;
        return this;
    }
    @JsonProperty("createdAt")
    public String createdAt;
    public DomainVerificationDetail withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dceToken")
    public String dceToken;
    public DomainVerificationDetail withDceToken(String dceToken) {
        this.dceToken = dceToken;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public DomainVerificationDetail withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("domainEntityId")
    public Long domainEntityId;
    public DomainVerificationDetail withDomainEntityId(Long domainEntityId) {
        this.domainEntityId = domainEntityId;
        return this;
    }
    @JsonProperty("modifiedAt")
    public String modifiedAt;
    public DomainVerificationDetail withModifiedAt(String modifiedAt) {
        this.modifiedAt = modifiedAt;
        return this;
    }
    @JsonProperty("status")
    public DomainVerificationDetailStatusEnum status;
    public DomainVerificationDetail withStatus(DomainVerificationDetailStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("type")
    public DomainVerificationDetailTypeEnum type;
    public DomainVerificationDetail withType(DomainVerificationDetailTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("usage")
    public DomainVerificationDetailUsageEnum usage;
    public DomainVerificationDetail withUsage(DomainVerificationDetailUsageEnum usage) {
        this.usage = usage;
        return this;
    }
}