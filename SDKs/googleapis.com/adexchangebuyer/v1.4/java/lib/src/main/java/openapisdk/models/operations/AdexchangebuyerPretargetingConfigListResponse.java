package openapisdk.models.operations;



public class AdexchangebuyerPretargetingConfigListResponse {
    public String contentType;
    public AdexchangebuyerPretargetingConfigListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PretargetingConfigList pretargetingConfigList;
    public AdexchangebuyerPretargetingConfigListResponse withPretargetingConfigList(openapisdk.models.shared.PretargetingConfigList pretargetingConfigList) {
        this.pretargetingConfigList = pretargetingConfigList;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerPretargetingConfigListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}