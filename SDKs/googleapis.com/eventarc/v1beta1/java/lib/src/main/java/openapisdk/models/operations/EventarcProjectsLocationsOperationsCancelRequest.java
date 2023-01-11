package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EventarcProjectsLocationsOperationsCancelRequest {
    public EventarcProjectsLocationsOperationsCancelPathParams pathParams;
    public EventarcProjectsLocationsOperationsCancelRequest withPathParams(EventarcProjectsLocationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EventarcProjectsLocationsOperationsCancelQueryParams queryParams;
    public EventarcProjectsLocationsOperationsCancelRequest withQueryParams(EventarcProjectsLocationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public EventarcProjectsLocationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public EventarcProjectsLocationsOperationsCancelSecurity security;
    public EventarcProjectsLocationsOperationsCancelRequest withSecurity(EventarcProjectsLocationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}