package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResellerCustomersInsertRequest {
    public ResellerCustomersInsertQueryParams queryParams;
    public ResellerCustomersInsertRequest withQueryParams(ResellerCustomersInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Customer request;
    public ResellerCustomersInsertRequest withRequest(openapisdk.models.shared.Customer request) {
        this.request = request;
        return this;
    }
    public ResellerCustomersInsertSecurity security;
    public ResellerCustomersInsertRequest withSecurity(ResellerCustomersInsertSecurity security) {
        this.security = security;
        return this;
    }
}