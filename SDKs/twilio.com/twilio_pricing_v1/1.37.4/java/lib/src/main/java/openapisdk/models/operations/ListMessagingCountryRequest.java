package openapisdk.models.operations;



public class ListMessagingCountryRequest {
    public String serverURL;
    public ListMessagingCountryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListMessagingCountryQueryParams queryParams;
    public ListMessagingCountryRequest withQueryParams(ListMessagingCountryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMessagingCountrySecurity security;
    public ListMessagingCountryRequest withSecurity(ListMessagingCountrySecurity security) {
        this.security = security;
        return this;
    }
}