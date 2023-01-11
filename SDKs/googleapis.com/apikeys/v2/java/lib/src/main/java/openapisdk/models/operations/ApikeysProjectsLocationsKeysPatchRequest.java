package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApikeysProjectsLocationsKeysPatchRequest {
    public ApikeysProjectsLocationsKeysPatchPathParams pathParams;
    public ApikeysProjectsLocationsKeysPatchRequest withPathParams(ApikeysProjectsLocationsKeysPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApikeysProjectsLocationsKeysPatchQueryParams queryParams;
    public ApikeysProjectsLocationsKeysPatchRequest withQueryParams(ApikeysProjectsLocationsKeysPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.V2KeyInput request;
    public ApikeysProjectsLocationsKeysPatchRequest withRequest(openapisdk.models.shared.V2KeyInput request) {
        this.request = request;
        return this;
    }
    public ApikeysProjectsLocationsKeysPatchSecurity security;
    public ApikeysProjectsLocationsKeysPatchRequest withSecurity(ApikeysProjectsLocationsKeysPatchSecurity security) {
        this.security = security;
        return this;
    }
}