package openapisdk.models.operations;



public class CalendarEventsInstancesRequest {
    public CalendarEventsInstancesPathParams pathParams;
    public CalendarEventsInstancesRequest withPathParams(CalendarEventsInstancesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarEventsInstancesQueryParams queryParams;
    public CalendarEventsInstancesRequest withQueryParams(CalendarEventsInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CalendarEventsInstancesSecurity security;
    public CalendarEventsInstancesRequest withSecurity(CalendarEventsInstancesSecurity security) {
        this.security = security;
        return this;
    }
}