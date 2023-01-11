package openapisdk.models.operations;



public class FetchBundleResponse {
    public String contentType;
    public FetchBundleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchBundleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceBundle numbersV2RegulatoryComplianceBundle;
    public FetchBundleResponse withNumbersV2RegulatoryComplianceBundle(openapisdk.models.shared.NumbersV2RegulatoryComplianceBundle numbersV2RegulatoryComplianceBundle) {
        this.numbersV2RegulatoryComplianceBundle = numbersV2RegulatoryComplianceBundle;
        return this;
    }
}