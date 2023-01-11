package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePaymentCancellationPsuDataRequest {
    public UpdatePaymentCancellationPsuDataPathParams pathParams;
    public UpdatePaymentCancellationPsuDataRequest withPathParams(UpdatePaymentCancellationPsuDataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdatePaymentCancellationPsuDataHeaders headers;
    public UpdatePaymentCancellationPsuDataRequest withHeaders(UpdatePaymentCancellationPsuDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UpdatePaymentCancellationPsuDataRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public UpdatePaymentCancellationPsuDataSecurity security;
    public UpdatePaymentCancellationPsuDataRequest withSecurity(UpdatePaymentCancellationPsuDataSecurity security) {
        this.security = security;
        return this;
    }
}