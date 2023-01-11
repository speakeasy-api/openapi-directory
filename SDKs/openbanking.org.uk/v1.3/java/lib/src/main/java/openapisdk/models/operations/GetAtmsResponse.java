package openapisdk.models.operations;



public class GetAtmsResponse {
    public GetAtms400ErrorObject fourHundredErrorObject;
    public GetAtmsResponse withFourHundredErrorObject(GetAtms400ErrorObject fourHundredErrorObject) {
        this.fourHundredErrorObject = fourHundredErrorObject;
        return this;
    }
    public GetAtms408ErrorObject fourHundredAndEightErrorObject;
    public GetAtmsResponse withFourHundredAndEightErrorObject(GetAtms408ErrorObject fourHundredAndEightErrorObject) {
        this.fourHundredAndEightErrorObject = fourHundredAndEightErrorObject;
        return this;
    }
    public GetAtms429ErrorObject fourHundredAndTwentyNineErrorObject;
    public GetAtmsResponse withFourHundredAndTwentyNineErrorObject(GetAtms429ErrorObject fourHundredAndTwentyNineErrorObject) {
        this.fourHundredAndTwentyNineErrorObject = fourHundredAndTwentyNineErrorObject;
        return this;
    }
    public GetAtms500ErrorObject fiveHundredErrorObject;
    public GetAtmsResponse withFiveHundredErrorObject(GetAtms500ErrorObject fiveHundredErrorObject) {
        this.fiveHundredErrorObject = fiveHundredErrorObject;
        return this;
    }
    public GetAtms503ErrorObject fiveHundredAndThreeErrorObject;
    public GetAtmsResponse withFiveHundredAndThreeErrorObject(GetAtms503ErrorObject fiveHundredAndThreeErrorObject) {
        this.fiveHundredAndThreeErrorObject = fiveHundredAndThreeErrorObject;
        return this;
    }
    public String contentType;
    public GetAtmsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetAtmsErrorObject errorObject;
    public GetAtmsResponse withErrorObject(GetAtmsErrorObject errorObject) {
        this.errorObject = errorObject;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAtmsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAtmsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson getAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonObject;
    public GetAtmsResponse withGetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonObject(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson getAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonObject) {
        this.getAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonObject = getAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonObject;
        return this;
    }
}