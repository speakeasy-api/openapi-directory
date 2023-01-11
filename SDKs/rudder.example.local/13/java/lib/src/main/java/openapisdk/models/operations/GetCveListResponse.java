package openapisdk.models.operations;



public class GetCveListResponse {
    public String contentType;
    public GetCveListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCveListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCveList200ApplicationJson getCVEList200ApplicationJSONObject;
    public GetCveListResponse withGetCveList200ApplicationJsonObject(GetCveList200ApplicationJson getCVEList200ApplicationJSONObject) {
        this.getCVEList200ApplicationJSONObject = getCVEList200ApplicationJSONObject;
        return this;
    }
}