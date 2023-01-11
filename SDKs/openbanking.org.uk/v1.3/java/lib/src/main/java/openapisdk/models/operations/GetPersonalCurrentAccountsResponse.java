package openapisdk.models.operations;



public class GetPersonalCurrentAccountsResponse {
    public GetPersonalCurrentAccounts400ErrorObject fourHundredErrorObject;
    public GetPersonalCurrentAccountsResponse withFourHundredErrorObject(GetPersonalCurrentAccounts400ErrorObject fourHundredErrorObject) {
        this.fourHundredErrorObject = fourHundredErrorObject;
        return this;
    }
    public GetPersonalCurrentAccounts408ErrorObject fourHundredAndEightErrorObject;
    public GetPersonalCurrentAccountsResponse withFourHundredAndEightErrorObject(GetPersonalCurrentAccounts408ErrorObject fourHundredAndEightErrorObject) {
        this.fourHundredAndEightErrorObject = fourHundredAndEightErrorObject;
        return this;
    }
    public GetPersonalCurrentAccounts429ErrorObject fourHundredAndTwentyNineErrorObject;
    public GetPersonalCurrentAccountsResponse withFourHundredAndTwentyNineErrorObject(GetPersonalCurrentAccounts429ErrorObject fourHundredAndTwentyNineErrorObject) {
        this.fourHundredAndTwentyNineErrorObject = fourHundredAndTwentyNineErrorObject;
        return this;
    }
    public GetPersonalCurrentAccounts500ErrorObject fiveHundredErrorObject;
    public GetPersonalCurrentAccountsResponse withFiveHundredErrorObject(GetPersonalCurrentAccounts500ErrorObject fiveHundredErrorObject) {
        this.fiveHundredErrorObject = fiveHundredErrorObject;
        return this;
    }
    public GetPersonalCurrentAccounts503ErrorObject fiveHundredAndThreeErrorObject;
    public GetPersonalCurrentAccountsResponse withFiveHundredAndThreeErrorObject(GetPersonalCurrentAccounts503ErrorObject fiveHundredAndThreeErrorObject) {
        this.fiveHundredAndThreeErrorObject = fiveHundredAndThreeErrorObject;
        return this;
    }
    public String contentType;
    public GetPersonalCurrentAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetPersonalCurrentAccountsErrorObject errorObject;
    public GetPersonalCurrentAccountsResponse withErrorObject(GetPersonalCurrentAccountsErrorObject errorObject) {
        this.errorObject = errorObject;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPersonalCurrentAccountsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPersonalCurrentAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson getPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject;
    public GetPersonalCurrentAccountsResponse withGetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson getPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject) {
        this.getPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject = getPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject;
        return this;
    }
}