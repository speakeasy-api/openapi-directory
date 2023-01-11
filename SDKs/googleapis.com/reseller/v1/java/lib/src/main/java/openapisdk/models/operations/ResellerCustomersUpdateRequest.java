package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResellerCustomersUpdateRequest {
    public ResellerCustomersUpdatePathParams pathParams;
    public ResellerCustomersUpdateRequest withPathParams(ResellerCustomersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResellerCustomersUpdateQueryParams queryParams;
    public ResellerCustomersUpdateRequest withQueryParams(ResellerCustomersUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Customer request;
    public ResellerCustomersUpdateRequest withRequest(openapisdk.models.shared.Customer request) {
        this.request = request;
        return this;
    }
    public ResellerCustomersUpdateSecurity security;
    public ResellerCustomersUpdateRequest withSecurity(ResellerCustomersUpdateSecurity security) {
        this.security = security;
        return this;
    }
}