package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest {
    public DatastreamProjectsLocationsStreamsObjectsStopBackfillJobPathParams pathParams;
    public DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest withPathParams(DatastreamProjectsLocationsStreamsObjectsStopBackfillJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams queryParams;
    public DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest withQueryParams(DatastreamProjectsLocationsStreamsObjectsStopBackfillJobQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity security;
    public DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest withSecurity(DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity security) {
        this.security = security;
        return this;
    }
}