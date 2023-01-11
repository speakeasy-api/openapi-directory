package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsServicesVersionsInstancesDebugRequest {
    public AppengineAppsServicesVersionsInstancesDebugPathParams pathParams;
    public AppengineAppsServicesVersionsInstancesDebugRequest withPathParams(AppengineAppsServicesVersionsInstancesDebugPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsServicesVersionsInstancesDebugQueryParams queryParams;
    public AppengineAppsServicesVersionsInstancesDebugRequest withQueryParams(AppengineAppsServicesVersionsInstancesDebugQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DebugInstanceRequest request;
    public AppengineAppsServicesVersionsInstancesDebugRequest withRequest(openapisdk.models.shared.DebugInstanceRequest request) {
        this.request = request;
        return this;
    }
    public AppengineAppsServicesVersionsInstancesDebugSecurity security;
    public AppengineAppsServicesVersionsInstancesDebugRequest withSecurity(AppengineAppsServicesVersionsInstancesDebugSecurity security) {
        this.security = security;
        return this;
    }
}