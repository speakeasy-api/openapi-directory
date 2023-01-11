package openapisdk.models.operations;



public class GetUsersUserIdFollowingsResponse {
    public String contentType;
    public GetUsersUserIdFollowingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUsersUserIdFollowingsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetUsersUserIdFollowingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getUsersUserIdFollowings200ApplicationJSONOneOf;
    public GetUsersUserIdFollowingsResponse withGetUsersUserIdFollowings200ApplicationJsonOneOf(Object getUsersUserIdFollowings200ApplicationJSONOneOf) {
        this.getUsersUserIdFollowings200ApplicationJSONOneOf = getUsersUserIdFollowings200ApplicationJSONOneOf;
        return this;
    }
}