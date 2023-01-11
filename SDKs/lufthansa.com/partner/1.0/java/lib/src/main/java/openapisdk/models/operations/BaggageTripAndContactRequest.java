package openapisdk.models.operations;



public class BaggageTripAndContactRequest {
    public BaggageTripAndContactPathParams pathParams;
    public BaggageTripAndContactRequest withPathParams(BaggageTripAndContactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BaggageTripAndContactHeaders headers;
    public BaggageTripAndContactRequest withHeaders(BaggageTripAndContactHeaders headers) {
        this.headers = headers;
        return this;
    }
    public BaggageTripAndContactSecurity security;
    public BaggageTripAndContactRequest withSecurity(BaggageTripAndContactSecurity security) {
        this.security = security;
        return this;
    }
}