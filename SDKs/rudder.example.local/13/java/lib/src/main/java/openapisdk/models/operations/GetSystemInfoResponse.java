package openapisdk.models.operations;



public class GetSystemInfoResponse {
    public String contentType;
    public GetSystemInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSystemInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSystemInfo200ApplicationJson getSystemInfo200ApplicationJSONObject;
    public GetSystemInfoResponse withGetSystemInfo200ApplicationJsonObject(GetSystemInfo200ApplicationJson getSystemInfo200ApplicationJSONObject) {
        this.getSystemInfo200ApplicationJSONObject = getSystemInfo200ApplicationJSONObject;
        return this;
    }
}