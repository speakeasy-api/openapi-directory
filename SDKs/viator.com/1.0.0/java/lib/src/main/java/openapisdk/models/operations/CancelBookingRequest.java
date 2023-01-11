package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelBookingRequest {
    public String serverURL;
    public CancelBookingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CancelBookingPathParams pathParams;
    public CancelBookingRequest withPathParams(CancelBookingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CancelBookingHeaders headers;
    public CancelBookingRequest withHeaders(CancelBookingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancellationRequest request;
    public CancelBookingRequest withRequest(openapisdk.models.shared.CancellationRequest request) {
        this.request = request;
        return this;
    }
}