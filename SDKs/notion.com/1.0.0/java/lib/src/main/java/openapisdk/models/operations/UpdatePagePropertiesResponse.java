package openapisdk.models.operations;



public class UpdatePagePropertiesResponse {
    public String contentType;
    public UpdatePagePropertiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdatePagePropertiesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdatePagePropertiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdatePageProperties200ApplicationJson updatePageProperties200ApplicationJSONObject;
    public UpdatePagePropertiesResponse withUpdatePageProperties200ApplicationJsonObject(UpdatePageProperties200ApplicationJson updatePageProperties200ApplicationJSONObject) {
        this.updatePageProperties200ApplicationJSONObject = updatePageProperties200ApplicationJSONObject;
        return this;
    }
}