package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaxonomyAttractionsRequest {
    public TaxonomyAttractionsHeaders headers;
    public TaxonomyAttractionsRequest withHeaders(TaxonomyAttractionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TaxonomyAttractionsRequestBody request;
    public TaxonomyAttractionsRequest withRequest(TaxonomyAttractionsRequestBody request) {
        this.request = request;
        return this;
    }
}