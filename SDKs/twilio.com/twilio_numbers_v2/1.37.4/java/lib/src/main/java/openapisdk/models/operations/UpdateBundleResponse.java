package openapisdk.models.operations;



public class UpdateBundleResponse {
    public String contentType;
    public UpdateBundleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateBundleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceBundle numbersV2RegulatoryComplianceBundle;
    public UpdateBundleResponse withNumbersV2RegulatoryComplianceBundle(openapisdk.models.shared.NumbersV2RegulatoryComplianceBundle numbersV2RegulatoryComplianceBundle) {
        this.numbersV2RegulatoryComplianceBundle = numbersV2RegulatoryComplianceBundle;
        return this;
    }
}