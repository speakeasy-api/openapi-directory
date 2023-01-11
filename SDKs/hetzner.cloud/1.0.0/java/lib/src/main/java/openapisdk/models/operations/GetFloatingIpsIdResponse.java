package openapisdk.models.operations;



public class GetFloatingIpsIdResponse {
    public String contentType;
    public GetFloatingIpsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFloatingIpsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetFloatingIpsId200ApplicationJson getFloatingIpsId200ApplicationJSONObject;
    public GetFloatingIpsIdResponse withGetFloatingIpsId200ApplicationJsonObject(GetFloatingIpsId200ApplicationJson getFloatingIpsId200ApplicationJSONObject) {
        this.getFloatingIpsId200ApplicationJSONObject = getFloatingIpsId200ApplicationJSONObject;
        return this;
    }
}