package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SslCertDetail
 * SslCertDetail.
**/
public class SslCertDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certInfo")
    public SslCert certInfo;
    public SslCertDetail withCertInfo(SslCert certInfo) {
        this.certInfo = certInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certPrivateKey")
    public String certPrivateKey;
    public SslCertDetail withCertPrivateKey(String certPrivateKey) {
        this.certPrivateKey = certPrivateKey;
        return this;
    }
}