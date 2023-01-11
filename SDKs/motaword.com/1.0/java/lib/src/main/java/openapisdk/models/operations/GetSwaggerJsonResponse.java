package openapisdk.models.operations;



public class GetSwaggerJsonResponse {
    public String contentType;
    public GetSwaggerJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSwaggerJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getSwaggerJSON200ApplicationJSONObject;
    public GetSwaggerJsonResponse withGetSwaggerJson200ApplicationJsonObject(java.util.Map<String, Object> getSwaggerJSON200ApplicationJSONObject) {
        this.getSwaggerJSON200ApplicationJSONObject = getSwaggerJSON200ApplicationJSONObject;
        return this;
    }
}