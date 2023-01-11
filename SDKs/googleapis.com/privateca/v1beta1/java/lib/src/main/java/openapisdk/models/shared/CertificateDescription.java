package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateDescription
 * A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509.
**/
public class CertificateDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aiaIssuingCertificateUrls")
    public String[] aiaIssuingCertificateUrls;
    public CertificateDescription withAiaIssuingCertificateUrls(String[] aiaIssuingCertificateUrls) {
        this.aiaIssuingCertificateUrls = aiaIssuingCertificateUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorityKeyId")
    public KeyId authorityKeyId;
    public CertificateDescription withAuthorityKeyId(KeyId authorityKeyId) {
        this.authorityKeyId = authorityKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certFingerprint")
    public CertificateFingerprint certFingerprint;
    public CertificateDescription withCertFingerprint(CertificateFingerprint certFingerprint) {
        this.certFingerprint = certFingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configValues")
    public ReusableConfigValues configValues;
    public CertificateDescription withConfigValues(ReusableConfigValues configValues) {
        this.configValues = configValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crlDistributionPoints")
    public String[] crlDistributionPoints;
    public CertificateDescription withCrlDistributionPoints(String[] crlDistributionPoints) {
        this.crlDistributionPoints = crlDistributionPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKey")
    public PublicKey publicKey;
    public CertificateDescription withPublicKey(PublicKey publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjectDescription")
    public SubjectDescription subjectDescription;
    public CertificateDescription withSubjectDescription(SubjectDescription subjectDescription) {
        this.subjectDescription = subjectDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjectKeyId")
    public KeyId subjectKeyId;
    public CertificateDescription withSubjectKeyId(KeyId subjectKeyId) {
        this.subjectKeyId = subjectKeyId;
        return this;
    }
}