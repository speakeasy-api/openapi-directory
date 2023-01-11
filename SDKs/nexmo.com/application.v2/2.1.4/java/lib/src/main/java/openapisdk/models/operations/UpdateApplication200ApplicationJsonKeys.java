package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateApplication200ApplicationJsonKeys {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_key")
    public String privateKey;
    public UpdateApplication200ApplicationJsonKeys withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_key")
    public String publicKey;
    public UpdateApplication200ApplicationJsonKeys withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}