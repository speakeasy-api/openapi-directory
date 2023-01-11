package openapisdk.models.operations;



public class EndpointGetFeaturedPlaylistsResponse {
    public String contentType;
    public EndpointGetFeaturedPlaylistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetFeaturedPlaylistsResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.FeaturedPlaylistObject featuredPlaylistObject;
    public EndpointGetFeaturedPlaylistsResponse withFeaturedPlaylistObject(openapisdk.models.shared.FeaturedPlaylistObject featuredPlaylistObject) {
        this.featuredPlaylistObject = featuredPlaylistObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetFeaturedPlaylistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}