package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFundsConfirmationConsentsRequest {
    public CreateFundsConfirmationConsentsHeaders headers;
    public CreateFundsConfirmationConsentsRequest withHeaders(CreateFundsConfirmationConsentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObFundsConfirmationConsent1 request;
    public CreateFundsConfirmationConsentsRequest withRequest(openapisdk.models.shared.ObFundsConfirmationConsent1 request) {
        this.request = request;
        return this;
    }
    public CreateFundsConfirmationConsentsSecurity security;
    public CreateFundsConfirmationConsentsRequest withSecurity(CreateFundsConfirmationConsentsSecurity security) {
        this.security = security;
        return this;
    }
}