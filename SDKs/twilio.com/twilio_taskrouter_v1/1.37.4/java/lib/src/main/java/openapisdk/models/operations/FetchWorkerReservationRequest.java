package openapisdk.models.operations;



public class FetchWorkerReservationRequest {
    public String serverURL;
    public FetchWorkerReservationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWorkerReservationPathParams pathParams;
    public FetchWorkerReservationRequest withPathParams(FetchWorkerReservationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWorkerReservationSecurity security;
    public FetchWorkerReservationRequest withSecurity(FetchWorkerReservationSecurity security) {
        this.security = security;
        return this;
    }
}