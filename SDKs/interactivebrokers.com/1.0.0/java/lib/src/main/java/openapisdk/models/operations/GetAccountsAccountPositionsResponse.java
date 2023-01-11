package openapisdk.models.operations;



public class GetAccountsAccountPositionsResponse {
    public String contentType;
    public GetAccountsAccountPositionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountPositionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAccountsAccountPositions200ApplicationJson[] getAccountsAccountPositions200ApplicationJSONObjects;
    public GetAccountsAccountPositionsResponse withGetAccountsAccountPositions200ApplicationJsonObjects(GetAccountsAccountPositions200ApplicationJson[] getAccountsAccountPositions200ApplicationJSONObjects) {
        this.getAccountsAccountPositions200ApplicationJSONObjects = getAccountsAccountPositions200ApplicationJSONObjects;
        return this;
    }
}