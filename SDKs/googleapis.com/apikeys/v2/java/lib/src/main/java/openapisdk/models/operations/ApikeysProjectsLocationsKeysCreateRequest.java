package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApikeysProjectsLocationsKeysCreateRequest {
    public ApikeysProjectsLocationsKeysCreatePathParams pathParams;
    public ApikeysProjectsLocationsKeysCreateRequest withPathParams(ApikeysProjectsLocationsKeysCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApikeysProjectsLocationsKeysCreateQueryParams queryParams;
    public ApikeysProjectsLocationsKeysCreateRequest withQueryParams(ApikeysProjectsLocationsKeysCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.V2KeyInput request;
    public ApikeysProjectsLocationsKeysCreateRequest withRequest(openapisdk.models.shared.V2KeyInput request) {
        this.request = request;
        return this;
    }
    public ApikeysProjectsLocationsKeysCreateSecurity security;
    public ApikeysProjectsLocationsKeysCreateRequest withSecurity(ApikeysProjectsLocationsKeysCreateSecurity security) {
        this.security = security;
        return this;
    }
}