package openapisdk.models.operations;



public class ReposCreateCommitSignatureProtectionResponse {
    public String contentType;
    public ReposCreateCommitSignatureProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposCreateCommitSignatureProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposCreateCommitSignatureProtectionResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ProtectedBranchAdminEnforced protectedBranchAdminEnforced;
    public ReposCreateCommitSignatureProtectionResponse withProtectedBranchAdminEnforced(openapisdk.models.shared.ProtectedBranchAdminEnforced protectedBranchAdminEnforced) {
        this.protectedBranchAdminEnforced = protectedBranchAdminEnforced;
        return this;
    }
}