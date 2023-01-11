package openapisdk.models.operations;



public class ListWorkerReservationRequest {
    public String serverURL;
    public ListWorkerReservationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListWorkerReservationPathParams pathParams;
    public ListWorkerReservationRequest withPathParams(ListWorkerReservationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListWorkerReservationQueryParams queryParams;
    public ListWorkerReservationRequest withQueryParams(ListWorkerReservationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWorkerReservationSecurity security;
    public ListWorkerReservationRequest withSecurity(ListWorkerReservationSecurity security) {
        this.security = security;
        return this;
    }
}