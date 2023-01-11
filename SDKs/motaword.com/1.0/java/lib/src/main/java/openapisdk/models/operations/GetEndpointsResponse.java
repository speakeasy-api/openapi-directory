package openapisdk.models.operations;



public class GetEndpointsResponse {
    public String contentType;
    public GetEndpointsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetEndpointsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetEndpointsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getEndpoints200ApplicationJSONObject;
    public GetEndpointsResponse withGetEndpoints200ApplicationJsonObject(java.util.Map<String, Object> getEndpoints200ApplicationJSONObject) {
        this.getEndpoints200ApplicationJSONObject = getEndpoints200ApplicationJSONObject;
        return this;
    }
}