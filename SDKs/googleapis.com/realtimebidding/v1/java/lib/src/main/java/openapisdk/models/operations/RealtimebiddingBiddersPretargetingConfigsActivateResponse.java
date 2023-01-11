package openapisdk.models.operations;



public class RealtimebiddingBiddersPretargetingConfigsActivateResponse {
    public String contentType;
    public RealtimebiddingBiddersPretargetingConfigsActivateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PretargetingConfig pretargetingConfig;
    public RealtimebiddingBiddersPretargetingConfigsActivateResponse withPretargetingConfig(openapisdk.models.shared.PretargetingConfig pretargetingConfig) {
        this.pretargetingConfig = pretargetingConfig;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBiddersPretargetingConfigsActivateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}