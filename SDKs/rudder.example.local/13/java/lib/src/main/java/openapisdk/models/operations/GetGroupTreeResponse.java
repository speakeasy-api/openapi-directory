package openapisdk.models.operations;



public class GetGroupTreeResponse {
    public String contentType;
    public GetGroupTreeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetGroupTree200ApplicationJson getGroupTree200ApplicationJSONObject;
    public GetGroupTreeResponse withGetGroupTree200ApplicationJsonObject(GetGroupTree200ApplicationJson getGroupTree200ApplicationJSONObject) {
        this.getGroupTree200ApplicationJSONObject = getGroupTree200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public GetGroupTreeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}