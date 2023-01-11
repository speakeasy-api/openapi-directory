package openapisdk.models.operations;



public class FetchMessagingCountryRequest {
    public String serverURL;
    public FetchMessagingCountryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchMessagingCountryPathParams pathParams;
    public FetchMessagingCountryRequest withPathParams(FetchMessagingCountryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchMessagingCountrySecurity security;
    public FetchMessagingCountryRequest withSecurity(FetchMessagingCountrySecurity security) {
        this.security = security;
        return this;
    }
}