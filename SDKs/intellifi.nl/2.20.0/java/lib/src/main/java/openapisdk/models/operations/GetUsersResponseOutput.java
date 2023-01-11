package openapisdk.models.operations;



public class GetUsersResponseOutput {
    public String contentType;
    public GetUsersResponseOutput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUsers200ApplicationJsonOutput getUsers200ApplicationJSONObject;
    public GetUsersResponseOutput withGetUsers200ApplicationJsonObject(GetUsers200ApplicationJsonOutput getUsers200ApplicationJSONObject) {
        this.getUsers200ApplicationJSONObject = getUsers200ApplicationJSONObject;
        return this;
    }
}