package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VisionProjectsLocationsImagesAsyncBatchAnnotateRequest {
    public VisionProjectsLocationsImagesAsyncBatchAnnotatePathParams pathParams;
    public VisionProjectsLocationsImagesAsyncBatchAnnotateRequest withPathParams(VisionProjectsLocationsImagesAsyncBatchAnnotatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams queryParams;
    public VisionProjectsLocationsImagesAsyncBatchAnnotateRequest withQueryParams(VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest request;
    public VisionProjectsLocationsImagesAsyncBatchAnnotateRequest withRequest(openapisdk.models.shared.GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest request) {
        this.request = request;
        return this;
    }
    public VisionProjectsLocationsImagesAsyncBatchAnnotateSecurity security;
    public VisionProjectsLocationsImagesAsyncBatchAnnotateRequest withSecurity(VisionProjectsLocationsImagesAsyncBatchAnnotateSecurity security) {
        this.security = security;
        return this;
    }
}