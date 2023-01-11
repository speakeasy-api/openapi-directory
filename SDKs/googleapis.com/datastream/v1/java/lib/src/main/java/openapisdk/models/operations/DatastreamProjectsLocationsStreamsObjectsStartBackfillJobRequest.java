package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest {
    public DatastreamProjectsLocationsStreamsObjectsStartBackfillJobPathParams pathParams;
    public DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest withPathParams(DatastreamProjectsLocationsStreamsObjectsStartBackfillJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastreamProjectsLocationsStreamsObjectsStartBackfillJobQueryParams queryParams;
    public DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest withQueryParams(DatastreamProjectsLocationsStreamsObjectsStartBackfillJobQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DatastreamProjectsLocationsStreamsObjectsStartBackfillJobSecurity security;
    public DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest withSecurity(DatastreamProjectsLocationsStreamsObjectsStartBackfillJobSecurity security) {
        this.security = security;
        return this;
    }
}