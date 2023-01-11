package openapisdk.models.operations;



public class EndpointGetAudioAnalysisResponse {
    public openapisdk.models.shared.AudioAnalysisObject audioAnalysisObject;
    public EndpointGetAudioAnalysisResponse withAudioAnalysisObject(openapisdk.models.shared.AudioAnalysisObject audioAnalysisObject) {
        this.audioAnalysisObject = audioAnalysisObject;
        return this;
    }
    public String contentType;
    public EndpointGetAudioAnalysisResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetAudioAnalysisResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetAudioAnalysisResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}