package openapisdk.models.operations;



public class GetUsersUserIdFollowersResponse {
    public String contentType;
    public GetUsersUserIdFollowersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUsersUserIdFollowersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetUsersUserIdFollowersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getUsersUserIdFollowers200ApplicationJSONOneOf;
    public GetUsersUserIdFollowersResponse withGetUsersUserIdFollowers200ApplicationJsonOneOf(Object getUsersUserIdFollowers200ApplicationJSONOneOf) {
        this.getUsersUserIdFollowers200ApplicationJSONOneOf = getUsersUserIdFollowers200ApplicationJSONOneOf;
        return this;
    }
}