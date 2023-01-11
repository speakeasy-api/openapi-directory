package openapisdk.models.operations;



public class ExportEventsJsonRequest {
    public ExportEventsJsonQueryParams queryParams;
    public ExportEventsJsonRequest withQueryParams(ExportEventsJsonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ExportEventsJsonSecurity security;
    public ExportEventsJsonRequest withSecurity(ExportEventsJsonSecurity security) {
        this.security = security;
        return this;
    }
}