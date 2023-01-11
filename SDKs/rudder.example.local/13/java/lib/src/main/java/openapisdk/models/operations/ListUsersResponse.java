package openapisdk.models.operations;



public class ListUsersResponse {
    public String contentType;
    public ListUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListUsers200ApplicationJson listUsers200ApplicationJSONObject;
    public ListUsersResponse withListUsers200ApplicationJsonObject(ListUsers200ApplicationJson listUsers200ApplicationJSONObject) {
        this.listUsers200ApplicationJSONObject = listUsers200ApplicationJSONObject;
        return this;
    }
}