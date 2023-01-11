package openapisdk.models.operations;



public class FetchTaskReservationRequest {
    public String serverURL;
    public FetchTaskReservationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTaskReservationPathParams pathParams;
    public FetchTaskReservationRequest withPathParams(FetchTaskReservationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTaskReservationSecurity security;
    public FetchTaskReservationRequest withSecurity(FetchTaskReservationSecurity security) {
        this.security = security;
        return this;
    }
}