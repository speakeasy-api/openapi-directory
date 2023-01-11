package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsServicesVersionsPatchRequest {
    public AppengineAppsServicesVersionsPatchPathParams pathParams;
    public AppengineAppsServicesVersionsPatchRequest withPathParams(AppengineAppsServicesVersionsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsServicesVersionsPatchQueryParams queryParams;
    public AppengineAppsServicesVersionsPatchRequest withQueryParams(AppengineAppsServicesVersionsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Version request;
    public AppengineAppsServicesVersionsPatchRequest withRequest(openapisdk.models.shared.Version request) {
        this.request = request;
        return this;
    }
    public AppengineAppsServicesVersionsPatchSecurity security;
    public AppengineAppsServicesVersionsPatchRequest withSecurity(AppengineAppsServicesVersionsPatchSecurity security) {
        this.security = security;
        return this;
    }
}