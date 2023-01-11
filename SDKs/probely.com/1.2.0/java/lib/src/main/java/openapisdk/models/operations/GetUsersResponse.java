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
    public GetUsers200ApplicationJson getUsers200ApplicationJSONObject;
    public GetUsersResponse withGetUsers200ApplicationJsonObject(GetUsers200ApplicationJson getUsers200ApplicationJSONObject) {
        this.getUsers200ApplicationJSONObject = getUsers200ApplicationJSONObject;
        return this;
    }
    public GetUsers401ApplicationJson getUsers401ApplicationJSONObject;
    public GetUsersResponse withGetUsers401ApplicationJsonObject(GetUsers401ApplicationJson getUsers401ApplicationJSONObject) {
        this.getUsers401ApplicationJSONObject = getUsers401ApplicationJSONObject;
        return this;
    }
}