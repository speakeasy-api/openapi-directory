package openapisdk.models.operations;



public class CancelBookingQuoteRequest {
    public String serverURL;
    public CancelBookingQuoteRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CancelBookingQuotePathParams pathParams;
    public CancelBookingQuoteRequest withPathParams(CancelBookingQuotePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
}