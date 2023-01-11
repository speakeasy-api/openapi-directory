package openapisdk.models.operations;



public class GetFormatsResponse {
    public String contentType;
    public GetFormatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFormatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getFormats200ApplicationJSONObject;
    public GetFormatsResponse withGetFormats200ApplicationJsonObject(java.util.Map<String, Object> getFormats200ApplicationJSONObject) {
        this.getFormats200ApplicationJSONObject = getFormats200ApplicationJSONObject;
        return this;
    }
}