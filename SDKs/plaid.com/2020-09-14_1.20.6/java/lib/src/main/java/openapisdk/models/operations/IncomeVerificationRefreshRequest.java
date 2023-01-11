package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IncomeVerificationRefreshRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IncomeVerificationRefreshRequest request;
    public IncomeVerificationRefreshRequest withRequest(openapisdk.models.shared.IncomeVerificationRefreshRequest request) {
        this.request = request;
        return this;
    }
}