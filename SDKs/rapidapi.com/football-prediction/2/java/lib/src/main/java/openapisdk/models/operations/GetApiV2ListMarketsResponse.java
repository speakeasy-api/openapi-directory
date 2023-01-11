package openapisdk.models.operations;



public class GetApiV2ListMarketsResponse {
    public String contentType;
    public GetApiV2ListMarketsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiV2ListMarketsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetApiV2ListMarkets200ApplicationJson getApiV2ListMarkets200ApplicationJSONObject;
    public GetApiV2ListMarketsResponse withGetApiV2ListMarkets200ApplicationJsonObject(GetApiV2ListMarkets200ApplicationJson getApiV2ListMarkets200ApplicationJSONObject) {
        this.getApiV2ListMarkets200ApplicationJSONObject = getApiV2ListMarkets200ApplicationJSONObject;
        return this;
    }
    public GetApiV2ListMarkets404ApplicationJson getApiV2ListMarkets404ApplicationJSONObject;
    public GetApiV2ListMarketsResponse withGetApiV2ListMarkets404ApplicationJsonObject(GetApiV2ListMarkets404ApplicationJson getApiV2ListMarkets404ApplicationJSONObject) {
        this.getApiV2ListMarkets404ApplicationJSONObject = getApiV2ListMarkets404ApplicationJSONObject;
        return this;
    }
}