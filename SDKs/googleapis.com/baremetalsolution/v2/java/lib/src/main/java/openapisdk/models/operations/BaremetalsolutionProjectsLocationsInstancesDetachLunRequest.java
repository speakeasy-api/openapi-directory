package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsInstancesDetachLunRequest {
    public BaremetalsolutionProjectsLocationsInstancesDetachLunPathParams pathParams;
    public BaremetalsolutionProjectsLocationsInstancesDetachLunRequest withPathParams(BaremetalsolutionProjectsLocationsInstancesDetachLunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams queryParams;
    public BaremetalsolutionProjectsLocationsInstancesDetachLunRequest withQueryParams(BaremetalsolutionProjectsLocationsInstancesDetachLunQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetachLunRequest request;
    public BaremetalsolutionProjectsLocationsInstancesDetachLunRequest withRequest(openapisdk.models.shared.DetachLunRequest request) {
        this.request = request;
        return this;
    }
    public BaremetalsolutionProjectsLocationsInstancesDetachLunSecurity security;
    public BaremetalsolutionProjectsLocationsInstancesDetachLunRequest withSecurity(BaremetalsolutionProjectsLocationsInstancesDetachLunSecurity security) {
        this.security = security;
        return this;
    }
}