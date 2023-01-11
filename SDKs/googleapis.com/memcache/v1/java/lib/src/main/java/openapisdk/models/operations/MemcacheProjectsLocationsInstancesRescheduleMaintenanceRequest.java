package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest {
    public MemcacheProjectsLocationsInstancesRescheduleMaintenancePathParams pathParams;
    public MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest withPathParams(MemcacheProjectsLocationsInstancesRescheduleMaintenancePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams queryParams;
    public MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest withQueryParams(MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RescheduleMaintenanceRequest request;
    public MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest withRequest(openapisdk.models.shared.RescheduleMaintenanceRequest request) {
        this.request = request;
        return this;
    }
    public MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity security;
    public MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest withSecurity(MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity security) {
        this.security = security;
        return this;
    }
}