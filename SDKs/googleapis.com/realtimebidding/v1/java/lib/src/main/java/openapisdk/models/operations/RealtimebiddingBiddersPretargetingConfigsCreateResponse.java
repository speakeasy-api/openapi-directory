package openapisdk.models.operations;



public class RealtimebiddingBiddersPretargetingConfigsCreateResponse {
    public String contentType;
    public RealtimebiddingBiddersPretargetingConfigsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PretargetingConfig pretargetingConfig;
    public RealtimebiddingBiddersPretargetingConfigsCreateResponse withPretargetingConfig(openapisdk.models.shared.PretargetingConfig pretargetingConfig) {
        this.pretargetingConfig = pretargetingConfig;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBiddersPretargetingConfigsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}