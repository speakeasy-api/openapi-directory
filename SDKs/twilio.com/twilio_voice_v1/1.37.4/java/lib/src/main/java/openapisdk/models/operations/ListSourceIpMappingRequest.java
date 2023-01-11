package openapisdk.models.operations;



public class ListSourceIpMappingRequest {
    public String serverURL;
    public ListSourceIpMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSourceIpMappingQueryParams queryParams;
    public ListSourceIpMappingRequest withQueryParams(ListSourceIpMappingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSourceIpMappingSecurity security;
    public ListSourceIpMappingRequest withSecurity(ListSourceIpMappingSecurity security) {
        this.security = security;
        return this;
    }
}