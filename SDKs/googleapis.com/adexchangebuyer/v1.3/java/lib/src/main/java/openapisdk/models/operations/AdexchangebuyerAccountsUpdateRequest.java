package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerAccountsUpdateRequest {
    public AdexchangebuyerAccountsUpdatePathParams pathParams;
    public AdexchangebuyerAccountsUpdateRequest withPathParams(AdexchangebuyerAccountsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdexchangebuyerAccountsUpdateQueryParams queryParams;
    public AdexchangebuyerAccountsUpdateRequest withQueryParams(AdexchangebuyerAccountsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Account request;
    public AdexchangebuyerAccountsUpdateRequest withRequest(openapisdk.models.shared.Account request) {
        this.request = request;
        return this;
    }
    public AdexchangebuyerAccountsUpdateSecurity security;
    public AdexchangebuyerAccountsUpdateRequest withSecurity(AdexchangebuyerAccountsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}