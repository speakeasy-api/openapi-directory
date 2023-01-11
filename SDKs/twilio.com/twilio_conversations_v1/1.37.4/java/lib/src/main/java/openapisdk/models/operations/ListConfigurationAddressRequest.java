package openapisdk.models.operations;



public class ListConfigurationAddressRequest {
    public String serverURL;
    public ListConfigurationAddressRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListConfigurationAddressQueryParams queryParams;
    public ListConfigurationAddressRequest withQueryParams(ListConfigurationAddressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConfigurationAddressSecurity security;
    public ListConfigurationAddressRequest withSecurity(ListConfigurationAddressSecurity security) {
        this.security = security;
        return this;
    }
}