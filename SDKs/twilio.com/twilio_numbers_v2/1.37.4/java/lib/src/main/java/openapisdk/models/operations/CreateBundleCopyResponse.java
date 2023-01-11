package openapisdk.models.operations;



public class CreateBundleCopyResponse {
    public String contentType;
    public CreateBundleCopyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateBundleCopyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleBundleCopy numbersV2RegulatoryComplianceBundleBundleCopy;
    public CreateBundleCopyResponse withNumbersV2RegulatoryComplianceBundleBundleCopy(openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleBundleCopy numbersV2RegulatoryComplianceBundleBundleCopy) {
        this.numbersV2RegulatoryComplianceBundleBundleCopy = numbersV2RegulatoryComplianceBundleBundleCopy;
        return this;
    }
}