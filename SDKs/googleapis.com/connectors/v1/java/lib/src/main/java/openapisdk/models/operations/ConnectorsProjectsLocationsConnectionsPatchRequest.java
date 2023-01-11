package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsConnectionsPatchRequest {
    public ConnectorsProjectsLocationsConnectionsPatchPathParams pathParams;
    public ConnectorsProjectsLocationsConnectionsPatchRequest withPathParams(ConnectorsProjectsLocationsConnectionsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectorsProjectsLocationsConnectionsPatchQueryParams queryParams;
    public ConnectorsProjectsLocationsConnectionsPatchRequest withQueryParams(ConnectorsProjectsLocationsConnectionsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectionInput request;
    public ConnectorsProjectsLocationsConnectionsPatchRequest withRequest(openapisdk.models.shared.ConnectionInput request) {
        this.request = request;
        return this;
    }
    public ConnectorsProjectsLocationsConnectionsPatchSecurity security;
    public ConnectorsProjectsLocationsConnectionsPatchRequest withSecurity(ConnectorsProjectsLocationsConnectionsPatchSecurity security) {
        this.security = security;
        return this;
    }
}