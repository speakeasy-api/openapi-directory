package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecurityKey
 * The credential information for a Google registered security key.
**/
public class SecurityKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateKey")
    public String privateKey;
    public SecurityKey withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKey")
    public String publicKey;
    public SecurityKey withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("universalTwoFactor")
    public UniversalTwoFactor universalTwoFactor;
    public SecurityKey withUniversalTwoFactor(UniversalTwoFactor universalTwoFactor) {
        this.universalTwoFactor = universalTwoFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webAuthn")
    public WebAuthn webAuthn;
    public SecurityKey withWebAuthn(WebAuthn webAuthn) {
        this.webAuthn = webAuthn;
        return this;
    }
}