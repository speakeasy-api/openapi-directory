package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EstimateRatesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EstimateRatesRequestBody request;
    public EstimateRatesRequest withRequest(openapisdk.models.shared.EstimateRatesRequestBody request) {
        this.request = request;
        return this;
    }
}