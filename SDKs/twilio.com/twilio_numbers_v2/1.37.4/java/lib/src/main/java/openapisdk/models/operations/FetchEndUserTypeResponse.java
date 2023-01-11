package openapisdk.models.operations;



public class FetchEndUserTypeResponse {
    public String contentType;
    public FetchEndUserTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchEndUserTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUserType numbersV2RegulatoryComplianceEndUserType;
    public FetchEndUserTypeResponse withNumbersV2RegulatoryComplianceEndUserType(openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUserType numbersV2RegulatoryComplianceEndUserType) {
        this.numbersV2RegulatoryComplianceEndUserType = numbersV2RegulatoryComplianceEndUserType;
        return this;
    }
}