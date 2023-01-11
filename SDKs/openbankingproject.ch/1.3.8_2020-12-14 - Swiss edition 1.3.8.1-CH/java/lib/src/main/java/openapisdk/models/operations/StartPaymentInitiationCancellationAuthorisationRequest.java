package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartPaymentInitiationCancellationAuthorisationRequest {
    public StartPaymentInitiationCancellationAuthorisationPathParams pathParams;
    public StartPaymentInitiationCancellationAuthorisationRequest withPathParams(StartPaymentInitiationCancellationAuthorisationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StartPaymentInitiationCancellationAuthorisationHeaders headers;
    public StartPaymentInitiationCancellationAuthorisationRequest withHeaders(StartPaymentInitiationCancellationAuthorisationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public StartPaymentInitiationCancellationAuthorisationRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public StartPaymentInitiationCancellationAuthorisationSecurity security;
    public StartPaymentInitiationCancellationAuthorisationRequest withSecurity(StartPaymentInitiationCancellationAuthorisationSecurity security) {
        this.security = security;
        return this;
    }
}