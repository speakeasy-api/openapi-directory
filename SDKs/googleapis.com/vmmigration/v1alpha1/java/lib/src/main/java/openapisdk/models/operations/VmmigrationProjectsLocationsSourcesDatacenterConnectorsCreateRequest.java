package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateRequest {
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreatePathParams pathParams;
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateRequest withPathParams(VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateQueryParams queryParams;
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateRequest withQueryParams(VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DatacenterConnectorInput request;
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateRequest withRequest(openapisdk.models.shared.DatacenterConnectorInput request) {
        this.request = request;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateSecurity security;
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateRequest withSecurity(VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateSecurity security) {
        this.security = security;
        return this;
    }
}