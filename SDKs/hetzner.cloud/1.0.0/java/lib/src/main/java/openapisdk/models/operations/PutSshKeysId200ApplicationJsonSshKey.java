package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutSshKeysId200ApplicationJsonSshKey {
    @JsonProperty("created")
    public String created;
    public PutSshKeysId200ApplicationJsonSshKey withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("fingerprint")
    public String fingerprint;
    public PutSshKeysId200ApplicationJsonSshKey withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PutSshKeysId200ApplicationJsonSshKey withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PutSshKeysId200ApplicationJsonSshKey withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutSshKeysId200ApplicationJsonSshKey withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("public_key")
    public String publicKey;
    public PutSshKeysId200ApplicationJsonSshKey withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}