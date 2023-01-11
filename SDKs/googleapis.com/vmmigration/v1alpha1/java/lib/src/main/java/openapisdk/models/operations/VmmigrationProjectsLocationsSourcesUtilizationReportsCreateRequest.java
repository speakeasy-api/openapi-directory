package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest {
    public VmmigrationProjectsLocationsSourcesUtilizationReportsCreatePathParams pathParams;
    public VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest withPathParams(VmmigrationProjectsLocationsSourcesUtilizationReportsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams queryParams;
    public VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest withQueryParams(VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UtilizationReportInput request;
    public VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest withRequest(openapisdk.models.shared.UtilizationReportInput request) {
        this.request = request;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity security;
    public VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest withSecurity(VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity security) {
        this.security = security;
        return this;
    }
}