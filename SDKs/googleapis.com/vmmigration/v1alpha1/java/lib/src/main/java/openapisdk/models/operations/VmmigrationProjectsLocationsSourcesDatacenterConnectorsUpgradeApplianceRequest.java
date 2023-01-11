package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceRequest {
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliancePathParams pathParams;
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceRequest withPathParams(VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliancePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceQueryParams queryParams;
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceRequest withQueryParams(VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpgradeApplianceRequest request;
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceRequest withRequest(openapisdk.models.shared.UpgradeApplianceRequest request) {
        this.request = request;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceSecurity security;
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceRequest withSecurity(VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceSecurity security) {
        this.security = security;
        return this;
    }
}