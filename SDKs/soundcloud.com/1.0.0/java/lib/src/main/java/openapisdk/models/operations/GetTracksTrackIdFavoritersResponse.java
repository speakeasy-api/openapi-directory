package openapisdk.models.operations;



public class GetTracksTrackIdFavoritersResponse {
    public String contentType;
    public GetTracksTrackIdFavoritersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetTracksTrackIdFavoritersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetTracksTrackIdFavoritersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UsersList[] usersList;
    public GetTracksTrackIdFavoritersResponse withUsersList(openapisdk.models.shared.UsersList[] usersList) {
        this.usersList = usersList;
        return this;
    }
}