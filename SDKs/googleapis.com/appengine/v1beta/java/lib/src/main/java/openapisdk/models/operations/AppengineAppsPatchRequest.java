package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsPatchRequest {
    public AppengineAppsPatchPathParams pathParams;
    public AppengineAppsPatchRequest withPathParams(AppengineAppsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsPatchQueryParams queryParams;
    public AppengineAppsPatchRequest withQueryParams(AppengineAppsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplicationInput request;
    public AppengineAppsPatchRequest withRequest(openapisdk.models.shared.ApplicationInput request) {
        this.request = request;
        return this;
    }
    public AppengineAppsPatchSecurity security;
    public AppengineAppsPatchRequest withSecurity(AppengineAppsPatchSecurity security) {
        this.security = security;
        return this;
    }
}