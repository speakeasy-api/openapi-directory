package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersPublisherConnectionsBatchApproveRequest {
    public RealtimebiddingBiddersPublisherConnectionsBatchApprovePathParams pathParams;
    public RealtimebiddingBiddersPublisherConnectionsBatchApproveRequest withPathParams(RealtimebiddingBiddersPublisherConnectionsBatchApprovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBiddersPublisherConnectionsBatchApproveQueryParams queryParams;
    public RealtimebiddingBiddersPublisherConnectionsBatchApproveRequest withQueryParams(RealtimebiddingBiddersPublisherConnectionsBatchApproveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchApprovePublisherConnectionsRequest request;
    public RealtimebiddingBiddersPublisherConnectionsBatchApproveRequest withRequest(openapisdk.models.shared.BatchApprovePublisherConnectionsRequest request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBiddersPublisherConnectionsBatchApproveSecurity security;
    public RealtimebiddingBiddersPublisherConnectionsBatchApproveRequest withSecurity(RealtimebiddingBiddersPublisherConnectionsBatchApproveSecurity security) {
        this.security = security;
        return this;
    }
}