package openapisdk.models.operations;



public class EndpointGetTrackResponse {
    public String contentType;
    public EndpointGetTrackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetTrackResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetTrackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrackObject trackObject;
    public EndpointGetTrackResponse withTrackObject(openapisdk.models.shared.TrackObject trackObject) {
        this.trackObject = trackObject;
        return this;
    }
}