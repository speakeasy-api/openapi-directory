package openapisdk.models.operations;



public class ListAdvisoriesRequest {
    public ListAdvisoriesQueryParams queryParams;
    public ListAdvisoriesRequest withQueryParams(ListAdvisoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAdvisoriesSecurity security;
    public ListAdvisoriesRequest withSecurity(ListAdvisoriesSecurity security) {
        this.security = security;
        return this;
    }
}