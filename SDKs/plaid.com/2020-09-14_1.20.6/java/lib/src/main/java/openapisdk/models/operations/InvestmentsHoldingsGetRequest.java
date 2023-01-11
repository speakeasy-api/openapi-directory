package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InvestmentsHoldingsGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InvestmentsHoldingsGetRequest request;
    public InvestmentsHoldingsGetRequest withRequest(openapisdk.models.shared.InvestmentsHoldingsGetRequest request) {
        this.request = request;
        return this;
    }
}