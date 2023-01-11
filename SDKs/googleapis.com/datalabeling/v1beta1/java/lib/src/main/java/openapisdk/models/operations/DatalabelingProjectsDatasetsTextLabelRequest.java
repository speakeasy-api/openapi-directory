package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsDatasetsTextLabelRequest {
    public DatalabelingProjectsDatasetsTextLabelPathParams pathParams;
    public DatalabelingProjectsDatasetsTextLabelRequest withPathParams(DatalabelingProjectsDatasetsTextLabelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsDatasetsTextLabelQueryParams queryParams;
    public DatalabelingProjectsDatasetsTextLabelRequest withQueryParams(DatalabelingProjectsDatasetsTextLabelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1LabelTextRequest request;
    public DatalabelingProjectsDatasetsTextLabelRequest withRequest(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1LabelTextRequest request) {
        this.request = request;
        return this;
    }
    public DatalabelingProjectsDatasetsTextLabelSecurity security;
    public DatalabelingProjectsDatasetsTextLabelRequest withSecurity(DatalabelingProjectsDatasetsTextLabelSecurity security) {
        this.security = security;
        return this;
    }
}