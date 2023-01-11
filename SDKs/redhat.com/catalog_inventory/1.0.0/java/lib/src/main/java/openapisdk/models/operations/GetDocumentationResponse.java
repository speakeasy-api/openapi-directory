package openapisdk.models.operations;



public class GetDocumentationResponse {
    public String contentType;
    public GetDocumentationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDocumentationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getDocumentation200ApplicationJSONObject;
    public GetDocumentationResponse withGetDocumentation200ApplicationJsonObject(java.util.Map<String, Object> getDocumentation200ApplicationJSONObject) {
        this.getDocumentation200ApplicationJSONObject = getDocumentation200ApplicationJSONObject;
        return this;
    }
}