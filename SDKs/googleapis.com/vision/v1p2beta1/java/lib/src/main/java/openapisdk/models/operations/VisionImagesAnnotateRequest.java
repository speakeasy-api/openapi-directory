package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VisionImagesAnnotateRequest {
    public VisionImagesAnnotateQueryParams queryParams;
    public VisionImagesAnnotateRequest withQueryParams(VisionImagesAnnotateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest request;
    public VisionImagesAnnotateRequest withRequest(openapisdk.models.shared.GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest request) {
        this.request = request;
        return this;
    }
    public VisionImagesAnnotateSecurity security;
    public VisionImagesAnnotateRequest withSecurity(VisionImagesAnnotateSecurity security) {
        this.security = security;
        return this;
    }
}