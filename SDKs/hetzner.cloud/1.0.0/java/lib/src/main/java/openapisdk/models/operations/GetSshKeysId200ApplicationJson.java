package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSshKeysId200ApplicationJson {
    @JsonProperty("ssh_key")
    public GetSshKeysId200ApplicationJsonSshKey sshKey;
    public GetSshKeysId200ApplicationJson withSshKey(GetSshKeysId200ApplicationJsonSshKey sshKey) {
        this.sshKey = sshKey;
        return this;
    }
}