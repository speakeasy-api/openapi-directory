package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsServicesPatchRequest {
    public AppengineAppsServicesPatchPathParams pathParams;
    public AppengineAppsServicesPatchRequest withPathParams(AppengineAppsServicesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsServicesPatchQueryParams queryParams;
    public AppengineAppsServicesPatchRequest withQueryParams(AppengineAppsServicesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Service request;
    public AppengineAppsServicesPatchRequest withRequest(openapisdk.models.shared.Service request) {
        this.request = request;
        return this;
    }
    public AppengineAppsServicesPatchSecurity security;
    public AppengineAppsServicesPatchRequest withSecurity(AppengineAppsServicesPatchSecurity security) {
        this.security = security;
        return this;
    }
}