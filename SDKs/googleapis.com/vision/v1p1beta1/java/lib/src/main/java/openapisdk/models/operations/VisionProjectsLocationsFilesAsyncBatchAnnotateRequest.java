package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VisionProjectsLocationsFilesAsyncBatchAnnotateRequest {
    public VisionProjectsLocationsFilesAsyncBatchAnnotatePathParams pathParams;
    public VisionProjectsLocationsFilesAsyncBatchAnnotateRequest withPathParams(VisionProjectsLocationsFilesAsyncBatchAnnotatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams queryParams;
    public VisionProjectsLocationsFilesAsyncBatchAnnotateRequest withQueryParams(VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest request;
    public VisionProjectsLocationsFilesAsyncBatchAnnotateRequest withRequest(openapisdk.models.shared.GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest request) {
        this.request = request;
        return this;
    }
    public VisionProjectsLocationsFilesAsyncBatchAnnotateSecurity security;
    public VisionProjectsLocationsFilesAsyncBatchAnnotateRequest withSecurity(VisionProjectsLocationsFilesAsyncBatchAnnotateSecurity security) {
        this.security = security;
        return this;
    }
}