package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SshPublicKey
 * Parameters to support Ssh public key Authentication.
**/
public class SshPublicKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certType")
    public String certType;
    public SshPublicKey withCertType(String certType) {
        this.certType = certType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sshClientCert")
    public Secret sshClientCert;
    public SshPublicKey withSshClientCert(Secret sshClientCert) {
        this.sshClientCert = sshClientCert;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sshClientCertPass")
    public Secret sshClientCertPass;
    public SshPublicKey withSshClientCertPass(Secret sshClientCertPass) {
        this.sshClientCertPass = sshClientCertPass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public SshPublicKey withUsername(String username) {
        this.username = username;
        return this;
    }
}