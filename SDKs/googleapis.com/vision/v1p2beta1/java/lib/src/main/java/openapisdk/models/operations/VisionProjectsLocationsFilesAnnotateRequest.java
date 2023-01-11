package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VisionProjectsLocationsFilesAnnotateRequest {
    public VisionProjectsLocationsFilesAnnotatePathParams pathParams;
    public VisionProjectsLocationsFilesAnnotateRequest withPathParams(VisionProjectsLocationsFilesAnnotatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VisionProjectsLocationsFilesAnnotateQueryParams queryParams;
    public VisionProjectsLocationsFilesAnnotateRequest withQueryParams(VisionProjectsLocationsFilesAnnotateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest request;
    public VisionProjectsLocationsFilesAnnotateRequest withRequest(openapisdk.models.shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest request) {
        this.request = request;
        return this;
    }
    public VisionProjectsLocationsFilesAnnotateSecurity security;
    public VisionProjectsLocationsFilesAnnotateRequest withSecurity(VisionProjectsLocationsFilesAnnotateSecurity security) {
        this.security = security;
        return this;
    }
}