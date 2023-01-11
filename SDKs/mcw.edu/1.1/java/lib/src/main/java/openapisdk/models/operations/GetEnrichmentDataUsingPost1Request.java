package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnrichmentDataUsingPost1Request {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnrichmentRequest request;
    public GetEnrichmentDataUsingPost1Request withRequest(openapisdk.models.shared.EnrichmentRequest request) {
        this.request = request;
        return this;
    }
}