package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InvestmentsTransactionsGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InvestmentsTransactionsGetRequest request;
    public InvestmentsTransactionsGetRequest withRequest(openapisdk.models.shared.InvestmentsTransactionsGetRequest request) {
        this.request = request;
        return this;
    }
}