package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WrappingPublicKey
 * The public key component of the wrapping key. For details of the type of key this public key corresponds to, see the ImportMethod.
**/
public class WrappingPublicKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pem")
    public String pem;
    public WrappingPublicKey withPem(String pem) {
        this.pem = pem;
        return this;
    }
}