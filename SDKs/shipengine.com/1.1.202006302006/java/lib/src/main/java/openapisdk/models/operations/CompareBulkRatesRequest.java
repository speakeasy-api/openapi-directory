package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompareBulkRatesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CompareBulkRatesRequestBody request;
    public CompareBulkRatesRequest withRequest(openapisdk.models.shared.CompareBulkRatesRequestBody request) {
        this.request = request;
        return this;
    }
}