package openapisdk.models.operations;



public class CalendarAclGetRequest {
    public CalendarAclGetPathParams pathParams;
    public CalendarAclGetRequest withPathParams(CalendarAclGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarAclGetQueryParams queryParams;
    public CalendarAclGetRequest withQueryParams(CalendarAclGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CalendarAclGetSecurity security;
    public CalendarAclGetRequest withSecurity(CalendarAclGetSecurity security) {
        this.security = security;
        return this;
    }
}