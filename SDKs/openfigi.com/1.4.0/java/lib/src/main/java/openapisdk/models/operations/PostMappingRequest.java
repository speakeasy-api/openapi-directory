package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMappingRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MappingJob[] request;
    public PostMappingRequest withRequest(openapisdk.models.shared.MappingJob[] request) {
        this.request = request;
        return this;
    }
}