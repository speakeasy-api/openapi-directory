package openapisdk.models.operations;



public class ReposGetBranchProtectionResponse {
    public String contentType;
    public ReposGetBranchProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetBranchProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetBranchProtectionResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.BranchProtection branchProtection;
    public ReposGetBranchProtectionResponse withBranchProtection(openapisdk.models.shared.BranchProtection branchProtection) {
        this.branchProtection = branchProtection;
        return this;
    }
}