package openapisdk.models.operations;



public class ReposDeleteAdminBranchProtectionResponse {
    public String contentType;
    public ReposDeleteAdminBranchProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposDeleteAdminBranchProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposDeleteAdminBranchProtectionResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}