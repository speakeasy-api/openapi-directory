package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsAssociateRequest {
    public MybusinessAccountsLocationsAssociatePathParams pathParams;
    public MybusinessAccountsLocationsAssociateRequest withPathParams(MybusinessAccountsLocationsAssociatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsAssociateQueryParams queryParams;
    public MybusinessAccountsLocationsAssociateRequest withQueryParams(MybusinessAccountsLocationsAssociateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateLocationRequest request;
    public MybusinessAccountsLocationsAssociateRequest withRequest(openapisdk.models.shared.AssociateLocationRequest request) {
        this.request = request;
        return this;
    }
}