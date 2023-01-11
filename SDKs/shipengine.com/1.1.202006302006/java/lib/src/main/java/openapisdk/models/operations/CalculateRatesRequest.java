package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalculateRatesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CalculateRatesRequestBody request;
    public CalculateRatesRequest withRequest(openapisdk.models.shared.CalculateRatesRequestBody request) {
        this.request = request;
        return this;
    }
}