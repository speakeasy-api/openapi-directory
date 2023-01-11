package openapisdk.models.operations;



public class EndpointGetAudioFeaturesRequest {
    public EndpointGetAudioFeaturesPathParams pathParams;
    public EndpointGetAudioFeaturesRequest withPathParams(EndpointGetAudioFeaturesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointGetAudioFeaturesHeaders headers;
    public EndpointGetAudioFeaturesRequest withHeaders(EndpointGetAudioFeaturesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetAudioFeaturesSecurity security;
    public EndpointGetAudioFeaturesRequest withSecurity(EndpointGetAudioFeaturesSecurity security) {
        this.security = security;
        return this;
    }
}