package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddFundsToInsuranceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddFundsToInsuranceRequestBody request;
    public AddFundsToInsuranceRequest withRequest(openapisdk.models.shared.AddFundsToInsuranceRequestBody request) {
        this.request = request;
        return this;
    }
}