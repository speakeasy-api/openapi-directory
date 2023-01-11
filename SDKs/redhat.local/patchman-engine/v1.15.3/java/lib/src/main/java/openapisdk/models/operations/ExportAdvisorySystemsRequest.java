package openapisdk.models.operations;



public class ExportAdvisorySystemsRequest {
    public ExportAdvisorySystemsPathParams pathParams;
    public ExportAdvisorySystemsRequest withPathParams(ExportAdvisorySystemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ExportAdvisorySystemsQueryParams queryParams;
    public ExportAdvisorySystemsRequest withQueryParams(ExportAdvisorySystemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportAdvisorySystemsSecurity security;
    public ExportAdvisorySystemsRequest withSecurity(ExportAdvisorySystemsSecurity security) {
        this.security = security;
        return this;
    }
}