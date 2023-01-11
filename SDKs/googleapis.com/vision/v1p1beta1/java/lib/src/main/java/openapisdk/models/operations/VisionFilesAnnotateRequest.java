package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VisionFilesAnnotateRequest {
    public VisionFilesAnnotateQueryParams queryParams;
    public VisionFilesAnnotateRequest withQueryParams(VisionFilesAnnotateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest request;
    public VisionFilesAnnotateRequest withRequest(openapisdk.models.shared.GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest request) {
        this.request = request;
        return this;
    }
    public VisionFilesAnnotateSecurity security;
    public VisionFilesAnnotateRequest withSecurity(VisionFilesAnnotateSecurity security) {
        this.security = security;
        return this;
    }
}