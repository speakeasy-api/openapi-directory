package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LoginProfile
 * The user profile information used for logging in to a virtual machine on Google Compute Engine.
**/
public class LoginProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LoginProfile withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("posixAccounts")
    public PosixAccount[] posixAccounts;
    public LoginProfile withPosixAccounts(PosixAccount[] posixAccounts) {
        this.posixAccounts = posixAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sshPublicKeys")
    public java.util.Map<String, SshPublicKey> sshPublicKeys;
    public LoginProfile withSshPublicKeys(java.util.Map<String, SshPublicKey> sshPublicKeys) {
        this.sshPublicKeys = sshPublicKeys;
        return this;
    }
}