package openapisdk.models.operations;



public class ExportSystemsRequest {
    public ExportSystemsQueryParams queryParams;
    public ExportSystemsRequest withQueryParams(ExportSystemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportSystemsSecurity security;
    public ExportSystemsRequest withSecurity(ExportSystemsSecurity security) {
        this.security = security;
        return this;
    }
}