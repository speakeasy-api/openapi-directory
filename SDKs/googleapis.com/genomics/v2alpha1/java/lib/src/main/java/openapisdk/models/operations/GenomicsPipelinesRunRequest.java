package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenomicsPipelinesRunRequest {
    public GenomicsPipelinesRunQueryParams queryParams;
    public GenomicsPipelinesRunRequest withQueryParams(GenomicsPipelinesRunQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RunPipelineRequest request;
    public GenomicsPipelinesRunRequest withRequest(openapisdk.models.shared.RunPipelineRequest request) {
        this.request = request;
        return this;
    }
    public GenomicsPipelinesRunSecurity security;
    public GenomicsPipelinesRunRequest withSecurity(GenomicsPipelinesRunSecurity security) {
        this.security = security;
        return this;
    }
}