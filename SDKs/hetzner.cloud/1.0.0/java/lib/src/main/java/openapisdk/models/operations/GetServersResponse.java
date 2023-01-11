package openapisdk.models.operations;



public class GetServersResponse {
    public String contentType;
    public GetServersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetServersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetServers200ApplicationJson getServers200ApplicationJSONObject;
    public GetServersResponse withGetServers200ApplicationJsonObject(GetServers200ApplicationJson getServers200ApplicationJSONObject) {
        this.getServers200ApplicationJSONObject = getServers200ApplicationJSONObject;
        return this;
    }
}