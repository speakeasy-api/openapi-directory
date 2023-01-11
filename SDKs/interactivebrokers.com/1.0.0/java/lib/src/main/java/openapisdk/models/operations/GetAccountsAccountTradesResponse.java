package openapisdk.models.operations;



public class GetAccountsAccountTradesResponse {
    public String contentType;
    public GetAccountsAccountTradesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountTradesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAccountsAccountTrades200ApplicationJson[] getAccountsAccountTrades200ApplicationJSONObjects;
    public GetAccountsAccountTradesResponse withGetAccountsAccountTrades200ApplicationJsonObjects(GetAccountsAccountTrades200ApplicationJson[] getAccountsAccountTrades200ApplicationJSONObjects) {
        this.getAccountsAccountTrades200ApplicationJSONObjects = getAccountsAccountTrades200ApplicationJSONObjects;
        return this;
    }
}