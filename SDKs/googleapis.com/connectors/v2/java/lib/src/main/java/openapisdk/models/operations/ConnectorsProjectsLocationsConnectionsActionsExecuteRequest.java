package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsConnectionsActionsExecuteRequest {
    public ConnectorsProjectsLocationsConnectionsActionsExecutePathParams pathParams;
    public ConnectorsProjectsLocationsConnectionsActionsExecuteRequest withPathParams(ConnectorsProjectsLocationsConnectionsActionsExecutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams queryParams;
    public ConnectorsProjectsLocationsConnectionsActionsExecuteRequest withQueryParams(ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExecuteActionRequest request;
    public ConnectorsProjectsLocationsConnectionsActionsExecuteRequest withRequest(openapisdk.models.shared.ExecuteActionRequest request) {
        this.request = request;
        return this;
    }
    public ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity security;
    public ConnectorsProjectsLocationsConnectionsActionsExecuteRequest withSecurity(ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity security) {
        this.security = security;
        return this;
    }
}