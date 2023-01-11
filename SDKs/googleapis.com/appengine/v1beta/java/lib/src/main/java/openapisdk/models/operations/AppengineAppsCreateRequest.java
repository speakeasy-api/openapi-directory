package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsCreateRequest {
    public AppengineAppsCreateQueryParams queryParams;
    public AppengineAppsCreateRequest withQueryParams(AppengineAppsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplicationInput request;
    public AppengineAppsCreateRequest withRequest(openapisdk.models.shared.ApplicationInput request) {
        this.request = request;
        return this;
    }
    public AppengineAppsCreateSecurity security;
    public AppengineAppsCreateRequest withSecurity(AppengineAppsCreateSecurity security) {
        this.security = security;
        return this;
    }
}