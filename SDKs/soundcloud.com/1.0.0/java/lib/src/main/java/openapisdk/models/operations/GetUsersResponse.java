package openapisdk.models.operations;



public class GetUsersResponse {
    public String contentType;
    public GetUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUsersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getUsers200ApplicationJSONOneOf;
    public GetUsersResponse withGetUsers200ApplicationJsonOneOf(Object getUsers200ApplicationJSONOneOf) {
        this.getUsers200ApplicationJSONOneOf = getUsers200ApplicationJSONOneOf;
        return this;
    }
}