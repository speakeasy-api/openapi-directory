package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddFundsToCarrierRequest {
    public AddFundsToCarrierPathParams pathParams;
    public AddFundsToCarrierRequest withPathParams(AddFundsToCarrierPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddFundsToCarrierRequestBody request;
    public AddFundsToCarrierRequest withRequest(openapisdk.models.shared.AddFundsToCarrierRequestBody request) {
        this.request = request;
        return this;
    }
}