package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AllowedSubjectAltNames
 * AllowedSubjectAltNames specifies the allowed values for SubjectAltNames by the CertificateAuthority when issuing Certificates.
**/
public class AllowedSubjectAltNames {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowCustomSans")
    public Boolean allowCustomSans;
    public AllowedSubjectAltNames withAllowCustomSans(Boolean allowCustomSans) {
        this.allowCustomSans = allowCustomSans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowGlobbingDnsWildcards")
    public Boolean allowGlobbingDnsWildcards;
    public AllowedSubjectAltNames withAllowGlobbingDnsWildcards(Boolean allowGlobbingDnsWildcards) {
        this.allowGlobbingDnsWildcards = allowGlobbingDnsWildcards;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedDnsNames")
    public String[] allowedDnsNames;
    public AllowedSubjectAltNames withAllowedDnsNames(String[] allowedDnsNames) {
        this.allowedDnsNames = allowedDnsNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedEmailAddresses")
    public String[] allowedEmailAddresses;
    public AllowedSubjectAltNames withAllowedEmailAddresses(String[] allowedEmailAddresses) {
        this.allowedEmailAddresses = allowedEmailAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedIps")
    public String[] allowedIps;
    public AllowedSubjectAltNames withAllowedIps(String[] allowedIps) {
        this.allowedIps = allowedIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedUris")
    public String[] allowedUris;
    public AllowedSubjectAltNames withAllowedUris(String[] allowedUris) {
        this.allowedUris = allowedUris;
        return this;
    }
}