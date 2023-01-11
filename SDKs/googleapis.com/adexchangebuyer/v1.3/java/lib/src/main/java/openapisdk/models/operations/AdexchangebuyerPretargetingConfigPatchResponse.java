package openapisdk.models.operations;



public class AdexchangebuyerPretargetingConfigPatchResponse {
    public String contentType;
    public AdexchangebuyerPretargetingConfigPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PretargetingConfig pretargetingConfig;
    public AdexchangebuyerPretargetingConfigPatchResponse withPretargetingConfig(openapisdk.models.shared.PretargetingConfig pretargetingConfig) {
        this.pretargetingConfig = pretargetingConfig;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerPretargetingConfigPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}