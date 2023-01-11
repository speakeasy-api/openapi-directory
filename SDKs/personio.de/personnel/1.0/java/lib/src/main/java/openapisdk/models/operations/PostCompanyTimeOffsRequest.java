package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCompanyTimeOffsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateTimeOffPeriodRequest request;
    public PostCompanyTimeOffsRequest withRequest(openapisdk.models.shared.CreateTimeOffPeriodRequest request) {
        this.request = request;
        return this;
    }
}