package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AllowedKeyType
 * Describes a "type" of key that may be used in a Certificate issued from a CaPool. Note that a single AllowedKeyType may refer to either a fully-qualified key algorithm, such as RSA 4096, or a family of key algorithms, such as any RSA key.
**/
public class AllowedKeyType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ellipticCurve")
    public EcKeyType ellipticCurve;
    public AllowedKeyType withEllipticCurve(EcKeyType ellipticCurve) {
        this.ellipticCurve = ellipticCurve;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rsa")
    public RsaKeyType rsa;
    public AllowedKeyType withRsa(RsaKeyType rsa) {
        this.rsa = rsa;
        return this;
    }
}