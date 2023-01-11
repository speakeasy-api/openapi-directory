package openapisdk.models.operations;



public class GetUsersResponse {
    public String contentType;
    public GetUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getUsers200ApplicationJSONAny;
    public GetUsersResponse withGetUsers200ApplicationJsonAny(Object getUsers200ApplicationJSONAny) {
        this.getUsers200ApplicationJSONAny = getUsers200ApplicationJSONAny;
        return this;
    }
}