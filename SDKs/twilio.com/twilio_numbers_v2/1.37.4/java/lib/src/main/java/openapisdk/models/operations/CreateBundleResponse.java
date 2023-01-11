package openapisdk.models.operations;



public class CreateBundleResponse {
    public String contentType;
    public CreateBundleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateBundleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceBundle numbersV2RegulatoryComplianceBundle;
    public CreateBundleResponse withNumbersV2RegulatoryComplianceBundle(openapisdk.models.shared.NumbersV2RegulatoryComplianceBundle numbersV2RegulatoryComplianceBundle) {
        this.numbersV2RegulatoryComplianceBundle = numbersV2RegulatoryComplianceBundle;
        return this;
    }
}