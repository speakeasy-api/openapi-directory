package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsDatasetsCreateRequest {
    public DatalabelingProjectsDatasetsCreatePathParams pathParams;
    public DatalabelingProjectsDatasetsCreateRequest withPathParams(DatalabelingProjectsDatasetsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsDatasetsCreateQueryParams queryParams;
    public DatalabelingProjectsDatasetsCreateRequest withQueryParams(DatalabelingProjectsDatasetsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1CreateDatasetRequest request;
    public DatalabelingProjectsDatasetsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1CreateDatasetRequest request) {
        this.request = request;
        return this;
    }
    public DatalabelingProjectsDatasetsCreateSecurity security;
    public DatalabelingProjectsDatasetsCreateRequest withSecurity(DatalabelingProjectsDatasetsCreateSecurity security) {
        this.security = security;
        return this;
    }
}