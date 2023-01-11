package openapisdk.models.operations;



public class GetApiV2ListFederationsResponse {
    public String contentType;
    public GetApiV2ListFederationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiV2ListFederationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetApiV2ListFederations200ApplicationJson getApiV2ListFederations200ApplicationJSONObject;
    public GetApiV2ListFederationsResponse withGetApiV2ListFederations200ApplicationJsonObject(GetApiV2ListFederations200ApplicationJson getApiV2ListFederations200ApplicationJSONObject) {
        this.getApiV2ListFederations200ApplicationJSONObject = getApiV2ListFederations200ApplicationJSONObject;
        return this;
    }
    public GetApiV2ListFederations404ApplicationJson getApiV2ListFederations404ApplicationJSONObject;
    public GetApiV2ListFederationsResponse withGetApiV2ListFederations404ApplicationJsonObject(GetApiV2ListFederations404ApplicationJson getApiV2ListFederations404ApplicationJSONObject) {
        this.getApiV2ListFederations404ApplicationJSONObject = getApiV2ListFederations404ApplicationJSONObject;
        return this;
    }
}