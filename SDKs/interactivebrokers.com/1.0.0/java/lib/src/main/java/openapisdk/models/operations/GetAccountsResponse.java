package openapisdk.models.operations;



public class GetAccountsResponse {
    public String contentType;
    public GetAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAccounts200ApplicationJson getAccounts200ApplicationJSONObject;
    public GetAccountsResponse withGetAccounts200ApplicationJsonObject(GetAccounts200ApplicationJson getAccounts200ApplicationJSONObject) {
        this.getAccounts200ApplicationJSONObject = getAccounts200ApplicationJSONObject;
        return this;
    }
}