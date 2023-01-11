package openapisdk.models.operations;



public class OsloginUsersSshPublicKeysPatchResponse {
    public String contentType;
    public OsloginUsersSshPublicKeysPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SshPublicKey sshPublicKey;
    public OsloginUsersSshPublicKeysPatchResponse withSshPublicKey(openapisdk.models.shared.SshPublicKey sshPublicKey) {
        this.sshPublicKey = sshPublicKey;
        return this;
    }
    public Long statusCode;
    public OsloginUsersSshPublicKeysPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}