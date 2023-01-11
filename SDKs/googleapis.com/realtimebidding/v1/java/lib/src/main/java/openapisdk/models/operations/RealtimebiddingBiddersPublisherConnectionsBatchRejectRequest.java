package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest {
    public RealtimebiddingBiddersPublisherConnectionsBatchRejectPathParams pathParams;
    public RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest withPathParams(RealtimebiddingBiddersPublisherConnectionsBatchRejectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams queryParams;
    public RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest withQueryParams(RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchRejectPublisherConnectionsRequest request;
    public RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest withRequest(openapisdk.models.shared.BatchRejectPublisherConnectionsRequest request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity security;
    public RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest withSecurity(RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity security) {
        this.security = security;
        return this;
    }
}