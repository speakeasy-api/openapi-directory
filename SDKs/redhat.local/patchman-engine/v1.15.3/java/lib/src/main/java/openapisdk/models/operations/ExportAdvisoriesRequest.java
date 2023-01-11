package openapisdk.models.operations;



public class ExportAdvisoriesRequest {
    public ExportAdvisoriesQueryParams queryParams;
    public ExportAdvisoriesRequest withQueryParams(ExportAdvisoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportAdvisoriesSecurity security;
    public ExportAdvisoriesRequest withSecurity(ExportAdvisoriesSecurity security) {
        this.security = security;
        return this;
    }
}