package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RsAlgoSettings
 * Settings for an HMAC + SHA signing algorithm
**/
public class RsAlgoSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateKey")
    public String privateKey;
    public RsAlgoSettings withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @JsonProperty("publicKey")
    public String publicKey;
    public RsAlgoSettings withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @JsonProperty("size")
    public Integer size;
    public RsAlgoSettings withSize(Integer size) {
        this.size = size;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public RsAlgoSettings withType(String type) {
        this.type = type;
        return this;
    }
}