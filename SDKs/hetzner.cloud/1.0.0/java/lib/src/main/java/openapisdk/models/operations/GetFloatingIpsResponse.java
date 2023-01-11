package openapisdk.models.operations;



public class GetFloatingIpsResponse {
    public String contentType;
    public GetFloatingIpsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFloatingIpsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetFloatingIps200ApplicationJson getFloatingIps200ApplicationJSONObject;
    public GetFloatingIpsResponse withGetFloatingIps200ApplicationJsonObject(GetFloatingIps200ApplicationJson getFloatingIps200ApplicationJSONObject) {
        this.getFloatingIps200ApplicationJSONObject = getFloatingIps200ApplicationJSONObject;
        return this;
    }
}