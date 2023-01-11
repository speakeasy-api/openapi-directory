package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerAccountsPatchRequest {
    public AdexchangebuyerAccountsPatchPathParams pathParams;
    public AdexchangebuyerAccountsPatchRequest withPathParams(AdexchangebuyerAccountsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AdexchangebuyerAccountsPatchQueryParams queryParams;
    public AdexchangebuyerAccountsPatchRequest withQueryParams(AdexchangebuyerAccountsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Account request;
    public AdexchangebuyerAccountsPatchRequest withRequest(openapisdk.models.shared.Account request) {
        this.request = request;
        return this;
    }
    public AdexchangebuyerAccountsPatchSecurity security;
    public AdexchangebuyerAccountsPatchRequest withSecurity(AdexchangebuyerAccountsPatchSecurity security) {
        this.security = security;
        return this;
    }
}