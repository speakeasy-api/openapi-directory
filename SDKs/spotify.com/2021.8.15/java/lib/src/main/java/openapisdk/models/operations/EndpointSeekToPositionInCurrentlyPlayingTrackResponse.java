package openapisdk.models.operations;



public class EndpointSeekToPositionInCurrentlyPlayingTrackResponse {
    public String contentType;
    public EndpointSeekToPositionInCurrentlyPlayingTrackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointSeekToPositionInCurrentlyPlayingTrackResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointSeekToPositionInCurrentlyPlayingTrackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}