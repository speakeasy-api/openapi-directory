package openapisdk.models.operations;



public class OsloginUsersSshPublicKeysCreateResponse {
    public String contentType;
    public OsloginUsersSshPublicKeysCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SshPublicKey sshPublicKey;
    public OsloginUsersSshPublicKeysCreateResponse withSshPublicKey(openapisdk.models.shared.SshPublicKey sshPublicKey) {
        this.sshPublicKey = sshPublicKey;
        return this;
    }
    public Long statusCode;
    public OsloginUsersSshPublicKeysCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}