package openapisdk.models.operations;



public class AdexchangebuyerPretargetingConfigInsertResponse {
    public String contentType;
    public AdexchangebuyerPretargetingConfigInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PretargetingConfig pretargetingConfig;
    public AdexchangebuyerPretargetingConfigInsertResponse withPretargetingConfig(openapisdk.models.shared.PretargetingConfig pretargetingConfig) {
        this.pretargetingConfig = pretargetingConfig;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerPretargetingConfigInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}