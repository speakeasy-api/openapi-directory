package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResellerCustomersPatchRequest {
    public ResellerCustomersPatchPathParams pathParams;
    public ResellerCustomersPatchRequest withPathParams(ResellerCustomersPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResellerCustomersPatchQueryParams queryParams;
    public ResellerCustomersPatchRequest withQueryParams(ResellerCustomersPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Customer request;
    public ResellerCustomersPatchRequest withRequest(openapisdk.models.shared.Customer request) {
        this.request = request;
        return this;
    }
    public ResellerCustomersPatchSecurity security;
    public ResellerCustomersPatchRequest withSecurity(ResellerCustomersPatchSecurity security) {
        this.security = security;
        return this;
    }
}