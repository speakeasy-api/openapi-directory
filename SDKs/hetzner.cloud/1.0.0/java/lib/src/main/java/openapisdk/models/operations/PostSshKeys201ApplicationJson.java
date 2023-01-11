package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostSshKeys201ApplicationJson {
    @JsonProperty("ssh_key")
    public PostSshKeys201ApplicationJsonSshKey sshKey;
    public PostSshKeys201ApplicationJson withSshKey(PostSshKeys201ApplicationJsonSshKey sshKey) {
        this.sshKey = sshKey;
        return this;
    }
}