package openapisdk.models.operations;



public class ListReportsRequest {
    public ListReportsQueryParams queryParams;
    public ListReportsRequest withQueryParams(ListReportsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListReportsSecurity security;
    public ListReportsRequest withSecurity(ListReportsSecurity security) {
        this.security = security;
        return this;
    }
}