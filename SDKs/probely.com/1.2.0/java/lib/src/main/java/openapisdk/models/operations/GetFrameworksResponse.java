package openapisdk.models.operations;



public class GetFrameworksResponse {
    public String contentType;
    public GetFrameworksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFrameworksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetFrameworks200ApplicationJson getFrameworks200ApplicationJSONObject;
    public GetFrameworksResponse withGetFrameworks200ApplicationJsonObject(GetFrameworks200ApplicationJson getFrameworks200ApplicationJSONObject) {
        this.getFrameworks200ApplicationJSONObject = getFrameworks200ApplicationJSONObject;
        return this;
    }
    public GetFrameworks401ApplicationJson getFrameworks401ApplicationJSONObject;
    public GetFrameworksResponse withGetFrameworks401ApplicationJsonObject(GetFrameworks401ApplicationJson getFrameworks401ApplicationJSONObject) {
        this.getFrameworks401ApplicationJSONObject = getFrameworks401ApplicationJSONObject;
        return this;
    }
}