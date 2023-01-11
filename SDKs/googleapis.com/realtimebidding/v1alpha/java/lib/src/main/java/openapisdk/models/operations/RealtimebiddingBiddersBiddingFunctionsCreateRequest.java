package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersBiddingFunctionsCreateRequest {
    public RealtimebiddingBiddersBiddingFunctionsCreatePathParams pathParams;
    public RealtimebiddingBiddersBiddingFunctionsCreateRequest withPathParams(RealtimebiddingBiddersBiddingFunctionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBiddersBiddingFunctionsCreateQueryParams queryParams;
    public RealtimebiddingBiddersBiddingFunctionsCreateRequest withQueryParams(RealtimebiddingBiddersBiddingFunctionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BiddingFunctionInput request;
    public RealtimebiddingBiddersBiddingFunctionsCreateRequest withRequest(openapisdk.models.shared.BiddingFunctionInput request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBiddersBiddingFunctionsCreateSecurity security;
    public RealtimebiddingBiddersBiddingFunctionsCreateRequest withSecurity(RealtimebiddingBiddersBiddingFunctionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}