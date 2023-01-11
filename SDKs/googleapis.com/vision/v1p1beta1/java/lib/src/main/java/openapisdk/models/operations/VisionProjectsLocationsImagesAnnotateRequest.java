package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VisionProjectsLocationsImagesAnnotateRequest {
    public VisionProjectsLocationsImagesAnnotatePathParams pathParams;
    public VisionProjectsLocationsImagesAnnotateRequest withPathParams(VisionProjectsLocationsImagesAnnotatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VisionProjectsLocationsImagesAnnotateQueryParams queryParams;
    public VisionProjectsLocationsImagesAnnotateRequest withQueryParams(VisionProjectsLocationsImagesAnnotateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest request;
    public VisionProjectsLocationsImagesAnnotateRequest withRequest(openapisdk.models.shared.GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest request) {
        this.request = request;
        return this;
    }
    public VisionProjectsLocationsImagesAnnotateSecurity security;
    public VisionProjectsLocationsImagesAnnotateRequest withSecurity(VisionProjectsLocationsImagesAnnotateSecurity security) {
        this.security = security;
        return this;
    }
}