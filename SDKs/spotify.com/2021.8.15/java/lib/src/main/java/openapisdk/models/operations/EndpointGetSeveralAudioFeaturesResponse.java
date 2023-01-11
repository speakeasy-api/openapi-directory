package openapisdk.models.operations;



public class EndpointGetSeveralAudioFeaturesResponse {
    public openapisdk.models.shared.AudioFeaturesArrayObject audioFeaturesArrayObject;
    public EndpointGetSeveralAudioFeaturesResponse withAudioFeaturesArrayObject(openapisdk.models.shared.AudioFeaturesArrayObject audioFeaturesArrayObject) {
        this.audioFeaturesArrayObject = audioFeaturesArrayObject;
        return this;
    }
    public String contentType;
    public EndpointGetSeveralAudioFeaturesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetSeveralAudioFeaturesResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetSeveralAudioFeaturesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}