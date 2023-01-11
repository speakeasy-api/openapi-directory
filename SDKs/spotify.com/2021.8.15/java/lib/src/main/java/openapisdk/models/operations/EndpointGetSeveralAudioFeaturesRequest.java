package openapisdk.models.operations;



public class EndpointGetSeveralAudioFeaturesRequest {
    public EndpointGetSeveralAudioFeaturesQueryParams queryParams;
    public EndpointGetSeveralAudioFeaturesRequest withQueryParams(EndpointGetSeveralAudioFeaturesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetSeveralAudioFeaturesHeaders headers;
    public EndpointGetSeveralAudioFeaturesRequest withHeaders(EndpointGetSeveralAudioFeaturesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetSeveralAudioFeaturesSecurity security;
    public EndpointGetSeveralAudioFeaturesRequest withSecurity(EndpointGetSeveralAudioFeaturesSecurity security) {
        this.security = security;
        return this;
    }
}