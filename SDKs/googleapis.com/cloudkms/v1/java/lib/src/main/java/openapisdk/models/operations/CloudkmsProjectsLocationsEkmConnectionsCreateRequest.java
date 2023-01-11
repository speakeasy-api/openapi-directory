package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsEkmConnectionsCreateRequest {
    public CloudkmsProjectsLocationsEkmConnectionsCreatePathParams pathParams;
    public CloudkmsProjectsLocationsEkmConnectionsCreateRequest withPathParams(CloudkmsProjectsLocationsEkmConnectionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams queryParams;
    public CloudkmsProjectsLocationsEkmConnectionsCreateRequest withQueryParams(CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EkmConnectionInput request;
    public CloudkmsProjectsLocationsEkmConnectionsCreateRequest withRequest(openapisdk.models.shared.EkmConnectionInput request) {
        this.request = request;
        return this;
    }
    public CloudkmsProjectsLocationsEkmConnectionsCreateSecurity security;
    public CloudkmsProjectsLocationsEkmConnectionsCreateRequest withSecurity(CloudkmsProjectsLocationsEkmConnectionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}