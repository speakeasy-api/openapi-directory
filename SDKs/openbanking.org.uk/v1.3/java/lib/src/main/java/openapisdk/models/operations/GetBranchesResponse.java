package openapisdk.models.operations;



public class GetBranchesResponse {
    public GetBranches400ErrorObject fourHundredErrorObject;
    public GetBranchesResponse withFourHundredErrorObject(GetBranches400ErrorObject fourHundredErrorObject) {
        this.fourHundredErrorObject = fourHundredErrorObject;
        return this;
    }
    public GetBranches408ErrorObject fourHundredAndEightErrorObject;
    public GetBranchesResponse withFourHundredAndEightErrorObject(GetBranches408ErrorObject fourHundredAndEightErrorObject) {
        this.fourHundredAndEightErrorObject = fourHundredAndEightErrorObject;
        return this;
    }
    public GetBranches429ErrorObject fourHundredAndTwentyNineErrorObject;
    public GetBranchesResponse withFourHundredAndTwentyNineErrorObject(GetBranches429ErrorObject fourHundredAndTwentyNineErrorObject) {
        this.fourHundredAndTwentyNineErrorObject = fourHundredAndTwentyNineErrorObject;
        return this;
    }
    public GetBranches500ErrorObject fiveHundredErrorObject;
    public GetBranchesResponse withFiveHundredErrorObject(GetBranches500ErrorObject fiveHundredErrorObject) {
        this.fiveHundredErrorObject = fiveHundredErrorObject;
        return this;
    }
    public GetBranches503ErrorObject fiveHundredAndThreeErrorObject;
    public GetBranchesResponse withFiveHundredAndThreeErrorObject(GetBranches503ErrorObject fiveHundredAndThreeErrorObject) {
        this.fiveHundredAndThreeErrorObject = fiveHundredAndThreeErrorObject;
        return this;
    }
    public String contentType;
    public GetBranchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetBranchesErrorObject errorObject;
    public GetBranchesResponse withErrorObject(GetBranchesErrorObject errorObject) {
        this.errorObject = errorObject;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetBranchesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetBranchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson getBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonObject;
    public GetBranchesResponse withGetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonObject(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson getBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonObject) {
        this.getBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonObject = getBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonObject;
        return this;
    }
}