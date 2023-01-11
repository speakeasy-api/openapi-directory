package openapisdk.models.operations;



public class GetUsersUserIdLikesTracksResponse {
    public String contentType;
    public GetUsersUserIdLikesTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUsersUserIdLikesTracksResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetUsersUserIdLikesTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getUsersUserIdLikesTracks200ApplicationJSONOneOf;
    public GetUsersUserIdLikesTracksResponse withGetUsersUserIdLikesTracks200ApplicationJsonOneOf(Object getUsersUserIdLikesTracks200ApplicationJSONOneOf) {
        this.getUsersUserIdLikesTracks200ApplicationJSONOneOf = getUsersUserIdLikesTracks200ApplicationJSONOneOf;
        return this;
    }
}