package openapisdk.models.operations;



public class CompileResponse {
    public String contentType;
    public CompileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CompileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> compile200ApplicationJSONObject;
    public CompileResponse withCompile200ApplicationJsonObject(java.util.Map<String, Object> compile200ApplicationJSONObject) {
        this.compile200ApplicationJSONObject = compile200ApplicationJSONObject;
        return this;
    }
}