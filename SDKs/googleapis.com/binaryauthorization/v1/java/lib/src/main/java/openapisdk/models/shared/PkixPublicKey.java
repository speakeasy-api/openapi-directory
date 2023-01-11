package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PkixPublicKey
 * A public key in the PkixPublicKey format (see https://tools.ietf.org/html/rfc5280#section-4.1.2.7 for details). Public keys of this type are typically textually encoded using the PEM format.
**/
public class PkixPublicKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKeyPem")
    public String publicKeyPem;
    public PkixPublicKey withPublicKeyPem(String publicKeyPem) {
        this.publicKeyPem = publicKeyPem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signatureAlgorithm")
    public PkixPublicKeySignatureAlgorithmEnum signatureAlgorithm;
    public PkixPublicKey withSignatureAlgorithm(PkixPublicKeySignatureAlgorithmEnum signatureAlgorithm) {
        this.signatureAlgorithm = signatureAlgorithm;
        return this;
    }
}