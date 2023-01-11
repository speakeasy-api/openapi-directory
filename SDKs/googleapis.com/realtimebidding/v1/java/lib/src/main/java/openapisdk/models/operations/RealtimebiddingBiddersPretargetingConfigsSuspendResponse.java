package openapisdk.models.operations;



public class RealtimebiddingBiddersPretargetingConfigsSuspendResponse {
    public String contentType;
    public RealtimebiddingBiddersPretargetingConfigsSuspendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PretargetingConfig pretargetingConfig;
    public RealtimebiddingBiddersPretargetingConfigsSuspendResponse withPretargetingConfig(openapisdk.models.shared.PretargetingConfig pretargetingConfig) {
        this.pretargetingConfig = pretargetingConfig;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBiddersPretargetingConfigsSuspendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}