package openapisdk.models.operations;



public class EndpointGetFollowedResponse {
    public String contentType;
    public EndpointGetFollowedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetFollowedResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.FollowingArtistsObject followingArtistsObject;
    public EndpointGetFollowedResponse withFollowingArtistsObject(openapisdk.models.shared.FollowingArtistsObject followingArtistsObject) {
        this.followingArtistsObject = followingArtistsObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetFollowedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}