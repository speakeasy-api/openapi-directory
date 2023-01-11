package openapisdk.models.operations;



public class ReposRenameBranchResponse {
    public String contentType;
    public ReposRenameBranchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposRenameBranchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposRenameBranchResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.BranchWithProtection branchWithProtection;
    public ReposRenameBranchResponse withBranchWithProtection(openapisdk.models.shared.BranchWithProtection branchWithProtection) {
        this.branchWithProtection = branchWithProtection;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposRenameBranchResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}