package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSshKeys200ApplicationJsonSshKeys {
    @JsonProperty("created")
    public String created;
    public GetSshKeys200ApplicationJsonSshKeys withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("fingerprint")
    public String fingerprint;
    public GetSshKeys200ApplicationJsonSshKeys withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetSshKeys200ApplicationJsonSshKeys withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetSshKeys200ApplicationJsonSshKeys withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetSshKeys200ApplicationJsonSshKeys withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("public_key")
    public String publicKey;
    public GetSshKeys200ApplicationJsonSshKeys withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}