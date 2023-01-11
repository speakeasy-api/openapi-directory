package openapisdk.models.operations;



public class ListRegulationRequest {
    public String serverURL;
    public ListRegulationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListRegulationQueryParams queryParams;
    public ListRegulationRequest withQueryParams(ListRegulationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRegulationSecurity security;
    public ListRegulationRequest withSecurity(ListRegulationSecurity security) {
        this.security = security;
        return this;
    }
}