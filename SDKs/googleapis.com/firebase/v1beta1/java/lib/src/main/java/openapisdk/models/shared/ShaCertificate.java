package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShaCertificate
 * A SHA-1 or SHA-256 certificate associated with the AndroidApp.
**/
public class ShaCertificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certType")
    public ShaCertificateCertTypeEnum certType;
    public ShaCertificate withCertType(ShaCertificateCertTypeEnum certType) {
        this.certType = certType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ShaCertificate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shaHash")
    public String shaHash;
    public ShaCertificate withShaHash(String shaHash) {
        this.shaHash = shaHash;
        return this;
    }
}