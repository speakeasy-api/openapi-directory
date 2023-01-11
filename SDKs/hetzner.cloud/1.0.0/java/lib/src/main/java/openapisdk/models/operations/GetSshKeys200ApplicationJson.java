package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSshKeys200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetSshKeys200ApplicationJsonMeta meta;
    public GetSshKeys200ApplicationJson withMeta(GetSshKeys200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("ssh_keys")
    public GetSshKeys200ApplicationJsonSshKeys[] sshKeys;
    public GetSshKeys200ApplicationJson withSshKeys(GetSshKeys200ApplicationJsonSshKeys[] sshKeys) {
        this.sshKeys = sshKeys;
        return this;
    }
}