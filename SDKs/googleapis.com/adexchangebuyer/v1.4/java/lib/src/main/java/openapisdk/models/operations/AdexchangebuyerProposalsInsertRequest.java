package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerProposalsInsertRequest {
    public AdexchangebuyerProposalsInsertQueryParams queryParams;
    public AdexchangebuyerProposalsInsertRequest withQueryParams(AdexchangebuyerProposalsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateOrdersRequest request;
    public AdexchangebuyerProposalsInsertRequest withRequest(openapisdk.models.shared.CreateOrdersRequest request) {
        this.request = request;
        return this;
    }
    public AdexchangebuyerProposalsInsertSecurity security;
    public AdexchangebuyerProposalsInsertRequest withSecurity(AdexchangebuyerProposalsInsertSecurity security) {
        this.security = security;
        return this;
    }
}