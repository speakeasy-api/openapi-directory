package openapisdk.models.operations;



public class GetAddressResponse {
    public String contentType;
    public GetAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getAddress200ApplicationJSONAny;
    public GetAddressResponse withGetAddress200ApplicationJsonAny(Object getAddress200ApplicationJSONAny) {
        this.getAddress200ApplicationJSONAny = getAddress200ApplicationJSONAny;
        return this;
    }
}