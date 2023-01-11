package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFundsConfirmationsRequest {
    public CreateFundsConfirmationsHeaders headers;
    public CreateFundsConfirmationsRequest withHeaders(CreateFundsConfirmationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObFundsConfirmation1 request;
    public CreateFundsConfirmationsRequest withRequest(openapisdk.models.shared.ObFundsConfirmation1 request) {
        this.request = request;
        return this;
    }
    public CreateFundsConfirmationsSecurity security;
    public CreateFundsConfirmationsRequest withSecurity(CreateFundsConfirmationsSecurity security) {
        this.security = security;
        return this;
    }
}