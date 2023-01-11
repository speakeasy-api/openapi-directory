package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSshKeysId200ApplicationJsonSshKey {
    @JsonProperty("created")
    public String created;
    public GetSshKeysId200ApplicationJsonSshKey withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("fingerprint")
    public String fingerprint;
    public GetSshKeysId200ApplicationJsonSshKey withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetSshKeysId200ApplicationJsonSshKey withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetSshKeysId200ApplicationJsonSshKey withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetSshKeysId200ApplicationJsonSshKey withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("public_key")
    public String publicKey;
    public GetSshKeysId200ApplicationJsonSshKey withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}