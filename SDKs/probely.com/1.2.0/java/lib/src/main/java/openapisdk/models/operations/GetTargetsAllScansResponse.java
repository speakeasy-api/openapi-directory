package openapisdk.models.operations;



public class GetTargetsAllScansResponse {
    public String contentType;
    public GetTargetsAllScansResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTargetsAllScansResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsAllScans200ApplicationJson getTargetsAllScans200ApplicationJSONObject;
    public GetTargetsAllScansResponse withGetTargetsAllScans200ApplicationJsonObject(GetTargetsAllScans200ApplicationJson getTargetsAllScans200ApplicationJSONObject) {
        this.getTargetsAllScans200ApplicationJSONObject = getTargetsAllScans200ApplicationJSONObject;
        return this;
    }
    public GetTargetsAllScans401ApplicationJson getTargetsAllScans401ApplicationJSONObject;
    public GetTargetsAllScansResponse withGetTargetsAllScans401ApplicationJsonObject(GetTargetsAllScans401ApplicationJson getTargetsAllScans401ApplicationJSONObject) {
        this.getTargetsAllScans401ApplicationJSONObject = getTargetsAllScans401ApplicationJSONObject;
        return this;
    }
}