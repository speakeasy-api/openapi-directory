package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlProjectsInstancesRescheduleMaintenanceRequest {
    public SqlProjectsInstancesRescheduleMaintenancePathParams pathParams;
    public SqlProjectsInstancesRescheduleMaintenanceRequest withPathParams(SqlProjectsInstancesRescheduleMaintenancePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlProjectsInstancesRescheduleMaintenanceQueryParams queryParams;
    public SqlProjectsInstancesRescheduleMaintenanceRequest withQueryParams(SqlProjectsInstancesRescheduleMaintenanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SqlInstancesRescheduleMaintenanceRequestBody request;
    public SqlProjectsInstancesRescheduleMaintenanceRequest withRequest(openapisdk.models.shared.SqlInstancesRescheduleMaintenanceRequestBody request) {
        this.request = request;
        return this;
    }
    public SqlProjectsInstancesRescheduleMaintenanceSecurity security;
    public SqlProjectsInstancesRescheduleMaintenanceRequest withSecurity(SqlProjectsInstancesRescheduleMaintenanceSecurity security) {
        this.security = security;
        return this;
    }
}