package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSshKeysResponse
 * Message for response of ListSSHKeys.
**/
public class ListSshKeysResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListSshKeysResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sshKeys")
    public SshKey[] sshKeys;
    public ListSshKeysResponse withSshKeys(SshKey[] sshKeys) {
        this.sshKeys = sshKeys;
        return this;
    }
}