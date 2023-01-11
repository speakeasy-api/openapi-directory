package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest {
    public BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialPathParams pathParams;
    public BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest withPathParams(BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams queryParams;
    public BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest withQueryParams(BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectionCredential request;
    public BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest withRequest(openapisdk.models.shared.ConnectionCredential request) {
        this.request = request;
        return this;
    }
    public BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity security;
    public BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest withSecurity(BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity security) {
        this.security = security;
        return this;
    }
}