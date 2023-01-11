package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VisionImagesAsyncBatchAnnotateRequest {
    public VisionImagesAsyncBatchAnnotateQueryParams queryParams;
    public VisionImagesAsyncBatchAnnotateRequest withQueryParams(VisionImagesAsyncBatchAnnotateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest request;
    public VisionImagesAsyncBatchAnnotateRequest withRequest(openapisdk.models.shared.GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest request) {
        this.request = request;
        return this;
    }
    public VisionImagesAsyncBatchAnnotateSecurity security;
    public VisionImagesAsyncBatchAnnotateRequest withSecurity(VisionImagesAsyncBatchAnnotateSecurity security) {
        this.security = security;
        return this;
    }
}