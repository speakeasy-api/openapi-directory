package openapisdk.models.operations;



public class AdexchangebuyerPretargetingConfigGetResponse {
    public String contentType;
    public AdexchangebuyerPretargetingConfigGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PretargetingConfig pretargetingConfig;
    public AdexchangebuyerPretargetingConfigGetResponse withPretargetingConfig(openapisdk.models.shared.PretargetingConfig pretargetingConfig) {
        this.pretargetingConfig = pretargetingConfig;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerPretargetingConfigGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}