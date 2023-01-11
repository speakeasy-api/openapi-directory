package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateAuthorityPolicy
 * The issuing policy for a CertificateAuthority. Certificates will not be successfully issued from this CertificateAuthority if they violate the policy.
**/
public class CertificateAuthorityPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedCommonNames")
    public String[] allowedCommonNames;
    public CertificateAuthorityPolicy withAllowedCommonNames(String[] allowedCommonNames) {
        this.allowedCommonNames = allowedCommonNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedConfigList")
    public AllowedConfigList allowedConfigList;
    public CertificateAuthorityPolicy withAllowedConfigList(AllowedConfigList allowedConfigList) {
        this.allowedConfigList = allowedConfigList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedIssuanceModes")
    public IssuanceModes allowedIssuanceModes;
    public CertificateAuthorityPolicy withAllowedIssuanceModes(IssuanceModes allowedIssuanceModes) {
        this.allowedIssuanceModes = allowedIssuanceModes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedLocationsAndOrganizations")
    public Subject[] allowedLocationsAndOrganizations;
    public CertificateAuthorityPolicy withAllowedLocationsAndOrganizations(Subject[] allowedLocationsAndOrganizations) {
        this.allowedLocationsAndOrganizations = allowedLocationsAndOrganizations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedSans")
    public AllowedSubjectAltNames allowedSans;
    public CertificateAuthorityPolicy withAllowedSans(AllowedSubjectAltNames allowedSans) {
        this.allowedSans = allowedSans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumLifetime")
    public String maximumLifetime;
    public CertificateAuthorityPolicy withMaximumLifetime(String maximumLifetime) {
        this.maximumLifetime = maximumLifetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overwriteConfigValues")
    public ReusableConfigWrapper overwriteConfigValues;
    public CertificateAuthorityPolicy withOverwriteConfigValues(ReusableConfigWrapper overwriteConfigValues) {
        this.overwriteConfigValues = overwriteConfigValues;
        return this;
    }
}