package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckAvailabilityOfFundsRequest {
    public CheckAvailabilityOfFundsHeaders headers;
    public CheckAvailabilityOfFundsRequest withHeaders(CheckAvailabilityOfFundsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfirmationOfFunds request;
    public CheckAvailabilityOfFundsRequest withRequest(openapisdk.models.shared.ConfirmationOfFunds request) {
        this.request = request;
        return this;
    }
    public CheckAvailabilityOfFundsSecurity security;
    public CheckAvailabilityOfFundsRequest withSecurity(CheckAvailabilityOfFundsSecurity security) {
        this.security = security;
        return this;
    }
}