package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutSshKeysId200ApplicationJson {
    @JsonProperty("ssh_key")
    public PutSshKeysId200ApplicationJsonSshKey sshKey;
    public PutSshKeysId200ApplicationJson withSshKey(PutSshKeysId200ApplicationJsonSshKey sshKey) {
        this.sshKey = sshKey;
        return this;
    }
}