package openapisdk.models.operations;



public class ListTaskReservationRequest {
    public String serverURL;
    public ListTaskReservationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListTaskReservationPathParams pathParams;
    public ListTaskReservationRequest withPathParams(ListTaskReservationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListTaskReservationQueryParams queryParams;
    public ListTaskReservationRequest withQueryParams(ListTaskReservationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTaskReservationSecurity security;
    public ListTaskReservationRequest withSecurity(ListTaskReservationSecurity security) {
        this.security = security;
        return this;
    }
}