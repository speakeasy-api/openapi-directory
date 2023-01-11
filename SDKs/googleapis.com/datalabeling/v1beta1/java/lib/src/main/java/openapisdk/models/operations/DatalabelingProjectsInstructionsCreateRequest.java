package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsInstructionsCreateRequest {
    public DatalabelingProjectsInstructionsCreatePathParams pathParams;
    public DatalabelingProjectsInstructionsCreateRequest withPathParams(DatalabelingProjectsInstructionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsInstructionsCreateQueryParams queryParams;
    public DatalabelingProjectsInstructionsCreateRequest withQueryParams(DatalabelingProjectsInstructionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1CreateInstructionRequest request;
    public DatalabelingProjectsInstructionsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1CreateInstructionRequest request) {
        this.request = request;
        return this;
    }
    public DatalabelingProjectsInstructionsCreateSecurity security;
    public DatalabelingProjectsInstructionsCreateRequest withSecurity(DatalabelingProjectsInstructionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}