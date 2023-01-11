package openapisdk.models.operations;



public class PutFloatingIpsIdResponse {
    public String contentType;
    public PutFloatingIpsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutFloatingIpsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PutFloatingIpsId200ApplicationJson putFloatingIpsId200ApplicationJSONObject;
    public PutFloatingIpsIdResponse withPutFloatingIpsId200ApplicationJsonObject(PutFloatingIpsId200ApplicationJson putFloatingIpsId200ApplicationJSONObject) {
        this.putFloatingIpsId200ApplicationJSONObject = putFloatingIpsId200ApplicationJSONObject;
        return this;
    }
}