package openapisdk.models.operations;



public class EnterpriseAdminRemoveAuthorizedSshKeyResponse {
    public String contentType;
    public EnterpriseAdminRemoveAuthorizedSshKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminRemoveAuthorizedSshKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SshKey[] sshKeys;
    public EnterpriseAdminRemoveAuthorizedSshKeyResponse withSshKeys(openapisdk.models.shared.SshKey[] sshKeys) {
        this.sshKeys = sshKeys;
        return this;
    }
}