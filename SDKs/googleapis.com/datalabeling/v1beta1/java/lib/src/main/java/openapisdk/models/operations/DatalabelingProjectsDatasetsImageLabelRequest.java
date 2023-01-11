package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsDatasetsImageLabelRequest {
    public DatalabelingProjectsDatasetsImageLabelPathParams pathParams;
    public DatalabelingProjectsDatasetsImageLabelRequest withPathParams(DatalabelingProjectsDatasetsImageLabelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsDatasetsImageLabelQueryParams queryParams;
    public DatalabelingProjectsDatasetsImageLabelRequest withQueryParams(DatalabelingProjectsDatasetsImageLabelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1LabelImageRequest request;
    public DatalabelingProjectsDatasetsImageLabelRequest withRequest(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1LabelImageRequest request) {
        this.request = request;
        return this;
    }
    public DatalabelingProjectsDatasetsImageLabelSecurity security;
    public DatalabelingProjectsDatasetsImageLabelRequest withSecurity(DatalabelingProjectsDatasetsImageLabelSecurity security) {
        this.security = security;
        return this;
    }
}