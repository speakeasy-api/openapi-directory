package openapisdk.models.operations;



public class GetBusinessCurrentAccountsResponse {
    public GetBusinessCurrentAccounts400ErrorObject fourHundredErrorObject;
    public GetBusinessCurrentAccountsResponse withFourHundredErrorObject(GetBusinessCurrentAccounts400ErrorObject fourHundredErrorObject) {
        this.fourHundredErrorObject = fourHundredErrorObject;
        return this;
    }
    public GetBusinessCurrentAccounts408ErrorObject fourHundredAndEightErrorObject;
    public GetBusinessCurrentAccountsResponse withFourHundredAndEightErrorObject(GetBusinessCurrentAccounts408ErrorObject fourHundredAndEightErrorObject) {
        this.fourHundredAndEightErrorObject = fourHundredAndEightErrorObject;
        return this;
    }
    public GetBusinessCurrentAccounts429ErrorObject fourHundredAndTwentyNineErrorObject;
    public GetBusinessCurrentAccountsResponse withFourHundredAndTwentyNineErrorObject(GetBusinessCurrentAccounts429ErrorObject fourHundredAndTwentyNineErrorObject) {
        this.fourHundredAndTwentyNineErrorObject = fourHundredAndTwentyNineErrorObject;
        return this;
    }
    public GetBusinessCurrentAccounts500ErrorObject fiveHundredErrorObject;
    public GetBusinessCurrentAccountsResponse withFiveHundredErrorObject(GetBusinessCurrentAccounts500ErrorObject fiveHundredErrorObject) {
        this.fiveHundredErrorObject = fiveHundredErrorObject;
        return this;
    }
    public GetBusinessCurrentAccounts503ErrorObject fiveHundredAndThreeErrorObject;
    public GetBusinessCurrentAccountsResponse withFiveHundredAndThreeErrorObject(GetBusinessCurrentAccounts503ErrorObject fiveHundredAndThreeErrorObject) {
        this.fiveHundredAndThreeErrorObject = fiveHundredAndThreeErrorObject;
        return this;
    }
    public String contentType;
    public GetBusinessCurrentAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetBusinessCurrentAccountsErrorObject errorObject;
    public GetBusinessCurrentAccountsResponse withErrorObject(GetBusinessCurrentAccountsErrorObject errorObject) {
        this.errorObject = errorObject;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetBusinessCurrentAccountsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetBusinessCurrentAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson getBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject;
    public GetBusinessCurrentAccountsResponse withGetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson getBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject) {
        this.getBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject = getBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject;
        return this;
    }
}