package openapisdk.models.operations;



public class GetServersIdResponse {
    public String contentType;
    public GetServersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetServersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetServersId200ApplicationJson getServersId200ApplicationJSONObject;
    public GetServersIdResponse withGetServersId200ApplicationJsonObject(GetServersId200ApplicationJson getServersId200ApplicationJSONObject) {
        this.getServersId200ApplicationJSONObject = getServersId200ApplicationJSONObject;
        return this;
    }
}