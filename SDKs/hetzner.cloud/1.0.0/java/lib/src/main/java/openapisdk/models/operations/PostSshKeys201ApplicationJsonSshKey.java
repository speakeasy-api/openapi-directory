package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostSshKeys201ApplicationJsonSshKey {
    @JsonProperty("created")
    public String created;
    public PostSshKeys201ApplicationJsonSshKey withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("fingerprint")
    public String fingerprint;
    public PostSshKeys201ApplicationJsonSshKey withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostSshKeys201ApplicationJsonSshKey withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PostSshKeys201ApplicationJsonSshKey withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostSshKeys201ApplicationJsonSshKey withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("public_key")
    public String publicKey;
    public PostSshKeys201ApplicationJsonSshKey withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}