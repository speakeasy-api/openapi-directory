package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IncomeVerificationPaystubsGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IncomeVerificationPaystubsGetRequest request;
    public IncomeVerificationPaystubsGetRequest withRequest(openapisdk.models.shared.IncomeVerificationPaystubsGetRequest request) {
        this.request = request;
        return this;
    }
}