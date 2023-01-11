package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsDatasetsVideoLabelRequest {
    public DatalabelingProjectsDatasetsVideoLabelPathParams pathParams;
    public DatalabelingProjectsDatasetsVideoLabelRequest withPathParams(DatalabelingProjectsDatasetsVideoLabelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsDatasetsVideoLabelQueryParams queryParams;
    public DatalabelingProjectsDatasetsVideoLabelRequest withQueryParams(DatalabelingProjectsDatasetsVideoLabelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1LabelVideoRequest request;
    public DatalabelingProjectsDatasetsVideoLabelRequest withRequest(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1LabelVideoRequest request) {
        this.request = request;
        return this;
    }
    public DatalabelingProjectsDatasetsVideoLabelSecurity security;
    public DatalabelingProjectsDatasetsVideoLabelRequest withSecurity(DatalabelingProjectsDatasetsVideoLabelSecurity security) {
        this.security = security;
        return this;
    }
}