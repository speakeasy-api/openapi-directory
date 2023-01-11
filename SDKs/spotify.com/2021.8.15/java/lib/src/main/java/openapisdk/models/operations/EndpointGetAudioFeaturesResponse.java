package openapisdk.models.operations;



public class EndpointGetAudioFeaturesResponse {
    public openapisdk.models.shared.AudioFeaturesObject audioFeaturesObject;
    public EndpointGetAudioFeaturesResponse withAudioFeaturesObject(openapisdk.models.shared.AudioFeaturesObject audioFeaturesObject) {
        this.audioFeaturesObject = audioFeaturesObject;
        return this;
    }
    public String contentType;
    public EndpointGetAudioFeaturesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetAudioFeaturesResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetAudioFeaturesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}