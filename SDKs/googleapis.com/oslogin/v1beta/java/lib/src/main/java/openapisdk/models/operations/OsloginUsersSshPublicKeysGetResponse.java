package openapisdk.models.operations;



public class OsloginUsersSshPublicKeysGetResponse {
    public String contentType;
    public OsloginUsersSshPublicKeysGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SshPublicKey sshPublicKey;
    public OsloginUsersSshPublicKeysGetResponse withSshPublicKey(openapisdk.models.shared.SshPublicKey sshPublicKey) {
        this.sshPublicKey = sshPublicKey;
        return this;
    }
    public Long statusCode;
    public OsloginUsersSshPublicKeysGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}