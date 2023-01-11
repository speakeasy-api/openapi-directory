package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsStreamsFetchErrorsRequest {
    public DatastreamProjectsLocationsStreamsFetchErrorsPathParams pathParams;
    public DatastreamProjectsLocationsStreamsFetchErrorsRequest withPathParams(DatastreamProjectsLocationsStreamsFetchErrorsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastreamProjectsLocationsStreamsFetchErrorsQueryParams queryParams;
    public DatastreamProjectsLocationsStreamsFetchErrorsRequest withQueryParams(DatastreamProjectsLocationsStreamsFetchErrorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DatastreamProjectsLocationsStreamsFetchErrorsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DatastreamProjectsLocationsStreamsFetchErrorsSecurity security;
    public DatastreamProjectsLocationsStreamsFetchErrorsRequest withSecurity(DatastreamProjectsLocationsStreamsFetchErrorsSecurity security) {
        this.security = security;
        return this;
    }
}