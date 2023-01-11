package openapisdk.models.operations;



public class GetUserResponse {
    public String contentType;
    public GetUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getUser200ApplicationJSONAny;
    public GetUserResponse withGetUser200ApplicationJsonAny(Object getUser200ApplicationJSONAny) {
        this.getUser200ApplicationJSONAny = getUser200ApplicationJSONAny;
        return this;
    }
}