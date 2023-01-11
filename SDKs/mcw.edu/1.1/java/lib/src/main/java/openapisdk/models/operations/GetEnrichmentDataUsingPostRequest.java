package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnrichmentDataUsingPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnrichmentGeneRequest request;
    public GetEnrichmentDataUsingPostRequest withRequest(openapisdk.models.shared.EnrichmentGeneRequest request) {
        this.request = request;
        return this;
    }
}