package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsInsightsdataExportRequest {
    public ContactcenterinsightsProjectsLocationsInsightsdataExportPathParams pathParams;
    public ContactcenterinsightsProjectsLocationsInsightsdataExportRequest withPathParams(ContactcenterinsightsProjectsLocationsInsightsdataExportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsInsightsdataExportQueryParams queryParams;
    public ContactcenterinsightsProjectsLocationsInsightsdataExportRequest withQueryParams(ContactcenterinsightsProjectsLocationsInsightsdataExportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest request;
    public ContactcenterinsightsProjectsLocationsInsightsdataExportRequest withRequest(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest request) {
        this.request = request;
        return this;
    }
    public ContactcenterinsightsProjectsLocationsInsightsdataExportSecurity security;
    public ContactcenterinsightsProjectsLocationsInsightsdataExportRequest withSecurity(ContactcenterinsightsProjectsLocationsInsightsdataExportSecurity security) {
        this.security = security;
        return this;
    }
}