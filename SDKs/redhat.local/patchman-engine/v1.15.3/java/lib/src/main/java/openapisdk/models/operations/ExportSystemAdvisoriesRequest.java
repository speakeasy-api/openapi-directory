package openapisdk.models.operations;



public class ExportSystemAdvisoriesRequest {
    public ExportSystemAdvisoriesPathParams pathParams;
    public ExportSystemAdvisoriesRequest withPathParams(ExportSystemAdvisoriesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ExportSystemAdvisoriesQueryParams queryParams;
    public ExportSystemAdvisoriesRequest withQueryParams(ExportSystemAdvisoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportSystemAdvisoriesSecurity security;
    public ExportSystemAdvisoriesRequest withSecurity(ExportSystemAdvisoriesSecurity security) {
        this.security = security;
        return this;
    }
}