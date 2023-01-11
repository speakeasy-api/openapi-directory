package openapisdk.models.operations;



public class EndpointGetMultipleEpisodesResponse {
    public String contentType;
    public EndpointGetMultipleEpisodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EpisodesObject episodesObject;
    public EndpointGetMultipleEpisodesResponse withEpisodesObject(openapisdk.models.shared.EpisodesObject episodesObject) {
        this.episodesObject = episodesObject;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetMultipleEpisodesResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetMultipleEpisodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}