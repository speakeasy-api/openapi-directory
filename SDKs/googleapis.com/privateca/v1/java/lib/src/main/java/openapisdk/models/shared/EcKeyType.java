package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EcKeyType
 * Describes an Elliptic Curve key that may be used in a Certificate issued from a CaPool.
**/
public class EcKeyType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signatureAlgorithm")
    public EcKeyTypeSignatureAlgorithmEnum signatureAlgorithm;
    public EcKeyType withSignatureAlgorithm(EcKeyTypeSignatureAlgorithmEnum signatureAlgorithm) {
        this.signatureAlgorithm = signatureAlgorithm;
        return this;
    }
}