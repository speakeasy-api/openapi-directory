package openapisdk.models.operations;



public class RealtimebiddingBiddersPretargetingConfigsListResponse {
    public String contentType;
    public RealtimebiddingBiddersPretargetingConfigsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPretargetingConfigsResponse listPretargetingConfigsResponse;
    public RealtimebiddingBiddersPretargetingConfigsListResponse withListPretargetingConfigsResponse(openapisdk.models.shared.ListPretargetingConfigsResponse listPretargetingConfigsResponse) {
        this.listPretargetingConfigsResponse = listPretargetingConfigsResponse;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBiddersPretargetingConfigsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}