package openapisdk.models.operations;



public class GetLastCveCheckResponse {
    public String contentType;
    public GetLastCveCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLastCveCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLastCveCheck200ApplicationJson getLastCVECheck200ApplicationJSONObject;
    public GetLastCveCheckResponse withGetLastCveCheck200ApplicationJsonObject(GetLastCveCheck200ApplicationJson getLastCVECheck200ApplicationJSONObject) {
        this.getLastCVECheck200ApplicationJSONObject = getLastCVECheck200ApplicationJSONObject;
        return this;
    }
}