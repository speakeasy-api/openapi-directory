package openapisdk.models.operations;



public class EndpointGetAvailableMarketsRequest {
    public EndpointGetAvailableMarketsHeaders headers;
    public EndpointGetAvailableMarketsRequest withHeaders(EndpointGetAvailableMarketsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetAvailableMarketsSecurity security;
    public EndpointGetAvailableMarketsRequest withSecurity(EndpointGetAvailableMarketsSecurity security) {
        this.security = security;
        return this;
    }
}