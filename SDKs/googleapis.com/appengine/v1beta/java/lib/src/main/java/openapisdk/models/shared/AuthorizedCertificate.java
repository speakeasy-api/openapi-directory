package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuthorizedCertificate
 * An SSL certificate that a user has been authorized to administer. A user is authorized to administer any certificate that applies to one of their authorized domains.
**/
public class AuthorizedCertificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateRawData")
    public CertificateRawData certificateRawData;
    public AuthorizedCertificate withCertificateRawData(CertificateRawData certificateRawData) {
        this.certificateRawData = certificateRawData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public AuthorizedCertificate withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainMappingsCount")
    public Integer domainMappingsCount;
    public AuthorizedCertificate withDomainMappingsCount(Integer domainMappingsCount) {
        this.domainMappingsCount = domainMappingsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainNames")
    public String[] domainNames;
    public AuthorizedCertificate withDomainNames(String[] domainNames) {
        this.domainNames = domainNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public AuthorizedCertificate withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AuthorizedCertificate withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedCertificate")
    public ManagedCertificate managedCertificate;
    public AuthorizedCertificate withManagedCertificate(ManagedCertificate managedCertificate) {
        this.managedCertificate = managedCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AuthorizedCertificate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibleDomainMappings")
    public String[] visibleDomainMappings;
    public AuthorizedCertificate withVisibleDomainMappings(String[] visibleDomainMappings) {
        this.visibleDomainMappings = visibleDomainMappings;
        return this;
    }
}