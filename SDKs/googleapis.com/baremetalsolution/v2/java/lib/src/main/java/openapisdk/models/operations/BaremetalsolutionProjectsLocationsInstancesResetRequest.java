package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsInstancesResetRequest {
    public BaremetalsolutionProjectsLocationsInstancesResetPathParams pathParams;
    public BaremetalsolutionProjectsLocationsInstancesResetRequest withPathParams(BaremetalsolutionProjectsLocationsInstancesResetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BaremetalsolutionProjectsLocationsInstancesResetQueryParams queryParams;
    public BaremetalsolutionProjectsLocationsInstancesResetRequest withQueryParams(BaremetalsolutionProjectsLocationsInstancesResetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public BaremetalsolutionProjectsLocationsInstancesResetRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public BaremetalsolutionProjectsLocationsInstancesResetSecurity security;
    public BaremetalsolutionProjectsLocationsInstancesResetRequest withSecurity(BaremetalsolutionProjectsLocationsInstancesResetSecurity security) {
        this.security = security;
        return this;
    }
}