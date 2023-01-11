package openapisdk.models.operations;



public class GetUsersUserIdFavoritesResponse {
    public String contentType;
    public GetUsersUserIdFavoritesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUsersUserIdFavoritesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetUsersUserIdFavoritesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getUsersUserIdFavorites200ApplicationJSONOneOf;
    public GetUsersUserIdFavoritesResponse withGetUsersUserIdFavorites200ApplicationJsonOneOf(Object getUsersUserIdFavorites200ApplicationJSONOneOf) {
        this.getUsersUserIdFavorites200ApplicationJSONOneOf = getUsersUserIdFavorites200ApplicationJSONOneOf;
        return this;
    }
}