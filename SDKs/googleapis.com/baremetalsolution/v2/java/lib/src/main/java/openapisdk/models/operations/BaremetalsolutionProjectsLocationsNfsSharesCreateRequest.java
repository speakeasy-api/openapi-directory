package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsNfsSharesCreateRequest {
    public BaremetalsolutionProjectsLocationsNfsSharesCreatePathParams pathParams;
    public BaremetalsolutionProjectsLocationsNfsSharesCreateRequest withPathParams(BaremetalsolutionProjectsLocationsNfsSharesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BaremetalsolutionProjectsLocationsNfsSharesCreateQueryParams queryParams;
    public BaremetalsolutionProjectsLocationsNfsSharesCreateRequest withQueryParams(BaremetalsolutionProjectsLocationsNfsSharesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NfsShareInput request;
    public BaremetalsolutionProjectsLocationsNfsSharesCreateRequest withRequest(openapisdk.models.shared.NfsShareInput request) {
        this.request = request;
        return this;
    }
    public BaremetalsolutionProjectsLocationsNfsSharesCreateSecurity security;
    public BaremetalsolutionProjectsLocationsNfsSharesCreateRequest withSecurity(BaremetalsolutionProjectsLocationsNfsSharesCreateSecurity security) {
        this.security = security;
        return this;
    }
}