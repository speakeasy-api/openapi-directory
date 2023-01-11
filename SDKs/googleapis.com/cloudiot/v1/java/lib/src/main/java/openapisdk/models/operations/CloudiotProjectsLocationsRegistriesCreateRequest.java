package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesCreateRequest {
    public CloudiotProjectsLocationsRegistriesCreatePathParams pathParams;
    public CloudiotProjectsLocationsRegistriesCreateRequest withPathParams(CloudiotProjectsLocationsRegistriesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesCreateQueryParams queryParams;
    public CloudiotProjectsLocationsRegistriesCreateRequest withQueryParams(CloudiotProjectsLocationsRegistriesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeviceRegistry request;
    public CloudiotProjectsLocationsRegistriesCreateRequest withRequest(openapisdk.models.shared.DeviceRegistry request) {
        this.request = request;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesCreateSecurity security;
    public CloudiotProjectsLocationsRegistriesCreateRequest withSecurity(CloudiotProjectsLocationsRegistriesCreateSecurity security) {
        this.security = security;
        return this;
    }
}