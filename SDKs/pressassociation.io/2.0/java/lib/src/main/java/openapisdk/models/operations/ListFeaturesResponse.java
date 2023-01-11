package openapisdk.models.operations;



public class ListFeaturesResponse {
    public String contentType;
    public ListFeaturesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListFeaturesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> listFeatures200ApplicationJSONObject;
    public ListFeaturesResponse withListFeatures200ApplicationJsonObject(java.util.Map<String, Object> listFeatures200ApplicationJSONObject) {
        this.listFeatures200ApplicationJSONObject = listFeatures200ApplicationJSONObject;
        return this;
    }
}