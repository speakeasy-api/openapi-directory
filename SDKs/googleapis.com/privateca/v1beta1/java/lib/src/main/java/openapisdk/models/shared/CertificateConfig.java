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
    @JsonProperty("reusableConfig")
    public ReusableConfigWrapper reusableConfig;
    public CertificateConfig withReusableConfig(ReusableConfigWrapper reusableConfig) {
        this.reusableConfig = reusableConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjectConfig")
    public SubjectConfig subjectConfig;
    public CertificateConfig withSubjectConfig(SubjectConfig subjectConfig) {
        this.subjectConfig = subjectConfig;
        return this;
    }
}