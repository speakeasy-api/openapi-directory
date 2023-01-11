package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IncomeVerificationSummaryGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IncomeVerificationSummaryGetRequest request;
    public IncomeVerificationSummaryGetRequest withRequest(openapisdk.models.shared.IncomeVerificationSummaryGetRequest request) {
        this.request = request;
        return this;
    }
}