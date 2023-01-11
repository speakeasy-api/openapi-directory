package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnrichmentTargetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public PostEnrichmentTargetRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}