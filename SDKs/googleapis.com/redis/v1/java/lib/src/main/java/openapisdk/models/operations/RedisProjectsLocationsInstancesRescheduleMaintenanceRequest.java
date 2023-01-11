package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RedisProjectsLocationsInstancesRescheduleMaintenanceRequest {
    public RedisProjectsLocationsInstancesRescheduleMaintenancePathParams pathParams;
    public RedisProjectsLocationsInstancesRescheduleMaintenanceRequest withPathParams(RedisProjectsLocationsInstancesRescheduleMaintenancePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RedisProjectsLocationsInstancesRescheduleMaintenanceQueryParams queryParams;
    public RedisProjectsLocationsInstancesRescheduleMaintenanceRequest withQueryParams(RedisProjectsLocationsInstancesRescheduleMaintenanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RescheduleMaintenanceRequest request;
    public RedisProjectsLocationsInstancesRescheduleMaintenanceRequest withRequest(openapisdk.models.shared.RescheduleMaintenanceRequest request) {
        this.request = request;
        return this;
    }
    public RedisProjectsLocationsInstancesRescheduleMaintenanceSecurity security;
    public RedisProjectsLocationsInstancesRescheduleMaintenanceRequest withSecurity(RedisProjectsLocationsInstancesRescheduleMaintenanceSecurity security) {
        this.security = security;
        return this;
    }
}