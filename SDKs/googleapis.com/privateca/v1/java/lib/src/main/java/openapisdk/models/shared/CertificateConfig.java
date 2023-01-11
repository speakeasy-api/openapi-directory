package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateConfig
 * A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.
**/
public class CertificateConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKey")
    public PublicKey publicKey;
    public CertificateConfig withPublicKey(PublicKey publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjectConfig")
    public SubjectConfig subjectConfig;
    public CertificateConfig withSubjectConfig(SubjectConfig subjectConfig) {
        this.subjectConfig = subjectConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("x509Config")
    public X509Parameters x509Config;
    public CertificateConfig withX509Config(X509Parameters x509Config) {
        this.x509Config = x509Config;
        return this;
    }
}