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
    public GetUsers200ApplicationJson[] getUsers200ApplicationJSONObjects;
    public GetUsersResponse withGetUsers200ApplicationJsonObjects(GetUsers200ApplicationJson[] getUsers200ApplicationJSONObjects) {
        this.getUsers200ApplicationJSONObjects = getUsers200ApplicationJSONObjects;
        return this;
    }
}