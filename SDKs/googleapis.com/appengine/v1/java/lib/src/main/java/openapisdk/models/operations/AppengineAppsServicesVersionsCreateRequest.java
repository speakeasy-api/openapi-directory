package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsServicesVersionsCreateRequest {
    public AppengineAppsServicesVersionsCreatePathParams pathParams;
    public AppengineAppsServicesVersionsCreateRequest withPathParams(AppengineAppsServicesVersionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsServicesVersionsCreateQueryParams queryParams;
    public AppengineAppsServicesVersionsCreateRequest withQueryParams(AppengineAppsServicesVersionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Version request;
    public AppengineAppsServicesVersionsCreateRequest withRequest(openapisdk.models.shared.Version request) {
        this.request = request;
        return this;
    }
    public AppengineAppsServicesVersionsCreateSecurity security;
    public AppengineAppsServicesVersionsCreateRequest withSecurity(AppengineAppsServicesVersionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}