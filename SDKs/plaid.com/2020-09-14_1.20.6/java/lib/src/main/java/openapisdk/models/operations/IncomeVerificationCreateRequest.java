package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IncomeVerificationCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IncomeVerificationCreateRequest request;
    public IncomeVerificationCreateRequest withRequest(openapisdk.models.shared.IncomeVerificationCreateRequest request) {
        this.request = request;
        return this;
    }
}