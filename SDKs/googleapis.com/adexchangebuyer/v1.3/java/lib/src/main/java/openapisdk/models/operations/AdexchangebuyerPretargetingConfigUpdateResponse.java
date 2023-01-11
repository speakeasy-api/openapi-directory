package openapisdk.models.operations;



public class AdexchangebuyerPretargetingConfigUpdateResponse {
    public String contentType;
    public AdexchangebuyerPretargetingConfigUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PretargetingConfig pretargetingConfig;
    public AdexchangebuyerPretargetingConfigUpdateResponse withPretargetingConfig(openapisdk.models.shared.PretargetingConfig pretargetingConfig) {
        this.pretargetingConfig = pretargetingConfig;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerPretargetingConfigUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}