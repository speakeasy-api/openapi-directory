package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VisionFilesAsyncBatchAnnotateRequest {
    public VisionFilesAsyncBatchAnnotateQueryParams queryParams;
    public VisionFilesAsyncBatchAnnotateRequest withQueryParams(VisionFilesAsyncBatchAnnotateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest request;
    public VisionFilesAsyncBatchAnnotateRequest withRequest(openapisdk.models.shared.GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest request) {
        this.request = request;
        return this;
    }
    public VisionFilesAsyncBatchAnnotateSecurity security;
    public VisionFilesAsyncBatchAnnotateRequest withSecurity(VisionFilesAsyncBatchAnnotateSecurity security) {
        this.security = security;
        return this;
    }
}