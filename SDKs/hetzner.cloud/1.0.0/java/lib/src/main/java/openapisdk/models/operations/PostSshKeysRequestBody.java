package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSshKeysRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, Object> labels;
    public PostSshKeysRequestBody withLabels(java.util.Map<String, Object> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostSshKeysRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("public_key")
    public String publicKey;
    public PostSshKeysRequestBody withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}