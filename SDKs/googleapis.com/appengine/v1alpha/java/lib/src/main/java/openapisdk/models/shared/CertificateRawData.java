package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateRawData
 * An SSL certificate obtained from a certificate authority.
**/
public class CertificateRawData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateKey")
    public String privateKey;
    public CertificateRawData withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicCertificate")
    public String publicCertificate;
    public CertificateRawData withPublicCertificate(String publicCertificate) {
        this.publicCertificate = publicCertificate;
        return this;
    }
}