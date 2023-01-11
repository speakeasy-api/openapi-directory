package openapisdk.models.operations;



public class ExportEventsJsonlRequest {
    public ExportEventsJsonlQueryParams queryParams;
    public ExportEventsJsonlRequest withQueryParams(ExportEventsJsonlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportEventsJsonlSecurity security;
    public ExportEventsJsonlRequest withSecurity(ExportEventsJsonlSecurity security) {
        this.security = security;
        return this;
    }
}