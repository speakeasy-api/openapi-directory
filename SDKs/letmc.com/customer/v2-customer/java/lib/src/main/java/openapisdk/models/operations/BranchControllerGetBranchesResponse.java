package openapisdk.models.operations;



public class BranchControllerGetBranchesResponse {
    public byte[] body;
    public BranchControllerGetBranchesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.BranchModelResults branchModelResults;
    public BranchControllerGetBranchesResponse withBranchModelResults(openapisdk.models.shared.BranchModelResults branchModelResults) {
        this.branchModelResults = branchModelResults;
        return this;
    }
    public String contentType;
    public BranchControllerGetBranchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BranchControllerGetBranchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}