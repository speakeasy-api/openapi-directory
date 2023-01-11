package openapisdk.models.operations;



public class GetAllAccountsResponse {
    public openapisdk.models.shared.FourHundredAndOneResponse fourHundredAndOneResponse;
    public GetAllAccountsResponse withFourHundredAndOneResponse(openapisdk.models.shared.FourHundredAndOneResponse fourHundredAndOneResponse) {
        this.fourHundredAndOneResponse = fourHundredAndOneResponse;
        return this;
    }
    public String contentType;
    public GetAllAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetAllAccounts200ApplicationJson getAllAccounts200ApplicationJSONObject;
    public GetAllAccountsResponse withGetAllAccounts200ApplicationJsonObject(GetAllAccounts200ApplicationJson getAllAccounts200ApplicationJSONObject) {
        this.getAllAccounts200ApplicationJSONObject = getAllAccounts200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public GetAllAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}