package openapisdk.models.operations;



public class PutServersIdResponse {
    public String contentType;
    public PutServersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutServersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PutServersId200ApplicationJson putServersId200ApplicationJSONObject;
    public PutServersIdResponse withPutServersId200ApplicationJsonObject(PutServersId200ApplicationJson putServersId200ApplicationJSONObject) {
        this.putServersId200ApplicationJSONObject = putServersId200ApplicationJSONObject;
        return this;
    }
}