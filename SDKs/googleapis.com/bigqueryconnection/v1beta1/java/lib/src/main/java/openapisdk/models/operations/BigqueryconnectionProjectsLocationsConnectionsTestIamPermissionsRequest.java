package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsRequest {
    public BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsPathParams pathParams;
    public BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsRequest withPathParams(BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsQueryParams queryParams;
    public BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsRequest withQueryParams(BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurity security;
    public BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsRequest withSecurity(BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}