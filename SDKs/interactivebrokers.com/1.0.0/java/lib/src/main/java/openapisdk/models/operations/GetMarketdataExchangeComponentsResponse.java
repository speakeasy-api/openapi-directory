package openapisdk.models.operations;



public class GetMarketdataExchangeComponentsResponse {
    public String contentType;
    public GetMarketdataExchangeComponentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMarketdataExchangeComponentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetMarketdataExchangeComponents200ApplicationJson[] getMarketdataExchangeComponents200ApplicationJSONObjects;
    public GetMarketdataExchangeComponentsResponse withGetMarketdataExchangeComponents200ApplicationJsonObjects(GetMarketdataExchangeComponents200ApplicationJson[] getMarketdataExchangeComponents200ApplicationJSONObjects) {
        this.getMarketdataExchangeComponents200ApplicationJSONObjects = getMarketdataExchangeComponents200ApplicationJSONObjects;
        return this;
    }
}