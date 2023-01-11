package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsDatasetsExportDataRequest {
    public DatalabelingProjectsDatasetsExportDataPathParams pathParams;
    public DatalabelingProjectsDatasetsExportDataRequest withPathParams(DatalabelingProjectsDatasetsExportDataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsDatasetsExportDataQueryParams queryParams;
    public DatalabelingProjectsDatasetsExportDataRequest withQueryParams(DatalabelingProjectsDatasetsExportDataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ExportDataRequest request;
    public DatalabelingProjectsDatasetsExportDataRequest withRequest(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1ExportDataRequest request) {
        this.request = request;
        return this;
    }
    public DatalabelingProjectsDatasetsExportDataSecurity security;
    public DatalabelingProjectsDatasetsExportDataRequest withSecurity(DatalabelingProjectsDatasetsExportDataSecurity security) {
        this.security = security;
        return this;
    }
}