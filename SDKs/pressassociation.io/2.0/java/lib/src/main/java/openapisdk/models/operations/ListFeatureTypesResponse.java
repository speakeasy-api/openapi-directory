package openapisdk.models.operations;



public class ListFeatureTypesResponse {
    public String contentType;
    public ListFeatureTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListFeatureTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> listFeatureTypes200ApplicationJSONObject;
    public ListFeatureTypesResponse withListFeatureTypes200ApplicationJsonObject(java.util.Map<String, Object> listFeatureTypes200ApplicationJSONObject) {
        this.listFeatureTypes200ApplicationJSONObject = listFeatureTypes200ApplicationJSONObject;
        return this;
    }
}