package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LifesciencesProjectsLocationsPipelinesRunRequest {
    public LifesciencesProjectsLocationsPipelinesRunPathParams pathParams;
    public LifesciencesProjectsLocationsPipelinesRunRequest withPathParams(LifesciencesProjectsLocationsPipelinesRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LifesciencesProjectsLocationsPipelinesRunQueryParams queryParams;
    public LifesciencesProjectsLocationsPipelinesRunRequest withQueryParams(LifesciencesProjectsLocationsPipelinesRunQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RunPipelineRequest request;
    public LifesciencesProjectsLocationsPipelinesRunRequest withRequest(openapisdk.models.shared.RunPipelineRequest request) {
        this.request = request;
        return this;
    }
    public LifesciencesProjectsLocationsPipelinesRunSecurity security;
    public LifesciencesProjectsLocationsPipelinesRunRequest withSecurity(LifesciencesProjectsLocationsPipelinesRunSecurity security) {
        this.security = security;
        return this;
    }
}