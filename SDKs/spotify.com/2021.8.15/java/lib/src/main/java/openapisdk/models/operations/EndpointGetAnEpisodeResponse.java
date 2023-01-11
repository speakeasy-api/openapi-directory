package openapisdk.models.operations;



public class EndpointGetAnEpisodeResponse {
    public String contentType;
    public EndpointGetAnEpisodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EpisodeObject episodeObject;
    public EndpointGetAnEpisodeResponse withEpisodeObject(openapisdk.models.shared.EpisodeObject episodeObject) {
        this.episodeObject = episodeObject;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetAnEpisodeResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetAnEpisodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}