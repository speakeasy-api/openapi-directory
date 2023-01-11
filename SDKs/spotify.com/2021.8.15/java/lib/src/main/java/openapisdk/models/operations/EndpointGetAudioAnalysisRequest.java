package openapisdk.models.operations;



public class EndpointGetAudioAnalysisRequest {
    public EndpointGetAudioAnalysisPathParams pathParams;
    public EndpointGetAudioAnalysisRequest withPathParams(EndpointGetAudioAnalysisPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetAudioAnalysisHeaders headers;
    public EndpointGetAudioAnalysisRequest withHeaders(EndpointGetAudioAnalysisHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetAudioAnalysisSecurity security;
    public EndpointGetAudioAnalysisRequest withSecurity(EndpointGetAudioAnalysisSecurity security) {
        this.security = security;
        return this;
    }
}