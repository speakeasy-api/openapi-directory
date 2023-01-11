package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryconnectionProjectsLocationsConnectionsCreateRequest {
    public BigqueryconnectionProjectsLocationsConnectionsCreatePathParams pathParams;
    public BigqueryconnectionProjectsLocationsConnectionsCreateRequest withPathParams(BigqueryconnectionProjectsLocationsConnectionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams queryParams;
    public BigqueryconnectionProjectsLocationsConnectionsCreateRequest withQueryParams(BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectionInput request;
    public BigqueryconnectionProjectsLocationsConnectionsCreateRequest withRequest(openapisdk.models.shared.ConnectionInput request) {
        this.request = request;
        return this;
    }
    public BigqueryconnectionProjectsLocationsConnectionsCreateSecurity security;
    public BigqueryconnectionProjectsLocationsConnectionsCreateRequest withSecurity(BigqueryconnectionProjectsLocationsConnectionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}