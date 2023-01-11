package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsAnnotationSpecSetsCreateRequest {
    public DatalabelingProjectsAnnotationSpecSetsCreatePathParams pathParams;
    public DatalabelingProjectsAnnotationSpecSetsCreateRequest withPathParams(DatalabelingProjectsAnnotationSpecSetsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsAnnotationSpecSetsCreateQueryParams queryParams;
    public DatalabelingProjectsAnnotationSpecSetsCreateRequest withQueryParams(DatalabelingProjectsAnnotationSpecSetsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest request;
    public DatalabelingProjectsAnnotationSpecSetsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest request) {
        this.request = request;
        return this;
    }
    public DatalabelingProjectsAnnotationSpecSetsCreateSecurity security;
    public DatalabelingProjectsAnnotationSpecSetsCreateRequest withSecurity(DatalabelingProjectsAnnotationSpecSetsCreateSecurity security) {
        this.security = security;
        return this;
    }
}