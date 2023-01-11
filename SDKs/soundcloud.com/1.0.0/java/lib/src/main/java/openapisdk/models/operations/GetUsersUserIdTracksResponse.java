package openapisdk.models.operations;



public class GetUsersUserIdTracksResponse {
    public String contentType;
    public GetUsersUserIdTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUsersUserIdTracksResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetUsersUserIdTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getUsersUserIdTracks200ApplicationJSONOneOf;
    public GetUsersUserIdTracksResponse withGetUsersUserIdTracks200ApplicationJsonOneOf(Object getUsersUserIdTracks200ApplicationJSONOneOf) {
        this.getUsersUserIdTracks200ApplicationJSONOneOf = getUsersUserIdTracks200ApplicationJSONOneOf;
        return this;
    }
}