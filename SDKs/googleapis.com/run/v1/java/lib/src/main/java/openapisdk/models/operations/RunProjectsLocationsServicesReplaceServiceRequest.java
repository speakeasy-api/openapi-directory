package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsServicesReplaceServiceRequest {
    public RunProjectsLocationsServicesReplaceServicePathParams pathParams;
    public RunProjectsLocationsServicesReplaceServiceRequest withPathParams(RunProjectsLocationsServicesReplaceServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunProjectsLocationsServicesReplaceServiceQueryParams queryParams;
    public RunProjectsLocationsServicesReplaceServiceRequest withQueryParams(RunProjectsLocationsServicesReplaceServiceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceInput request;
    public RunProjectsLocationsServicesReplaceServiceRequest withRequest(openapisdk.models.shared.ServiceInput request) {
        this.request = request;
        return this;
    }
    public RunProjectsLocationsServicesReplaceServiceSecurity security;
    public RunProjectsLocationsServicesReplaceServiceRequest withSecurity(RunProjectsLocationsServicesReplaceServiceSecurity security) {
        this.security = security;
        return this;
    }
}