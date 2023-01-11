package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersBiddingFunctionsArchiveRequest {
    public RealtimebiddingBiddersBiddingFunctionsArchivePathParams pathParams;
    public RealtimebiddingBiddersBiddingFunctionsArchiveRequest withPathParams(RealtimebiddingBiddersBiddingFunctionsArchivePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBiddersBiddingFunctionsArchiveQueryParams queryParams;
    public RealtimebiddingBiddersBiddingFunctionsArchiveRequest withQueryParams(RealtimebiddingBiddersBiddingFunctionsArchiveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public RealtimebiddingBiddersBiddingFunctionsArchiveRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBiddersBiddingFunctionsArchiveSecurity security;
    public RealtimebiddingBiddersBiddingFunctionsArchiveRequest withSecurity(RealtimebiddingBiddersBiddingFunctionsArchiveSecurity security) {
        this.security = security;
        return this;
    }
}