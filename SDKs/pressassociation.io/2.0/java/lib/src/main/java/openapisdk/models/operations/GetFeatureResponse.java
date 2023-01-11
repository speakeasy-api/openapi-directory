package openapisdk.models.operations;



public class GetFeatureResponse {
    public String contentType;
    public GetFeatureResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFeatureResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getFeature200ApplicationJSONObject;
    public GetFeatureResponse withGetFeature200ApplicationJsonObject(java.util.Map<String, Object> getFeature200ApplicationJSONObject) {
        this.getFeature200ApplicationJSONObject = getFeature200ApplicationJSONObject;
        return this;
    }
}