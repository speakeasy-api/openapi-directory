package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EsAlgoSettings
 * Settings for an EC + SHA signing algorithm
**/
public class EsAlgoSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateKey")
    public String privateKey;
    public EsAlgoSettings withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @JsonProperty("publicKey")
    public String publicKey;
    public EsAlgoSettings withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @JsonProperty("size")
    public Integer size;
    public EsAlgoSettings withSize(Integer size) {
        this.size = size;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public EsAlgoSettings withType(String type) {
        this.type = type;
        return this;
    }
}