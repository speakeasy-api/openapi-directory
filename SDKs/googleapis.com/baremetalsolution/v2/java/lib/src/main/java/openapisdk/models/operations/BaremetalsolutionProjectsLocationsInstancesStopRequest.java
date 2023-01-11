package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsInstancesStopRequest {
    public BaremetalsolutionProjectsLocationsInstancesStopPathParams pathParams;
    public BaremetalsolutionProjectsLocationsInstancesStopRequest withPathParams(BaremetalsolutionProjectsLocationsInstancesStopPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BaremetalsolutionProjectsLocationsInstancesStopQueryParams queryParams;
    public BaremetalsolutionProjectsLocationsInstancesStopRequest withQueryParams(BaremetalsolutionProjectsLocationsInstancesStopQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public BaremetalsolutionProjectsLocationsInstancesStopRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public BaremetalsolutionProjectsLocationsInstancesStopSecurity security;
    public BaremetalsolutionProjectsLocationsInstancesStopRequest withSecurity(BaremetalsolutionProjectsLocationsInstancesStopSecurity security) {
        this.security = security;
        return this;
    }
}