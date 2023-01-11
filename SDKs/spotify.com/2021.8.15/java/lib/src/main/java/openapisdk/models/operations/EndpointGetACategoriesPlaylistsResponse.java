package openapisdk.models.operations;



public class EndpointGetACategoriesPlaylistsResponse {
    public String contentType;
    public EndpointGetACategoriesPlaylistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetACategoriesPlaylistsResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.PlaylistPagingObject playlistPagingObject;
    public EndpointGetACategoriesPlaylistsResponse withPlaylistPagingObject(openapisdk.models.shared.PlaylistPagingObject playlistPagingObject) {
        this.playlistPagingObject = playlistPagingObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetACategoriesPlaylistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}