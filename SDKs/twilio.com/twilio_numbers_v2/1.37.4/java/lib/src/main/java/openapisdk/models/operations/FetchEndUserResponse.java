package openapisdk.models.operations;



public class FetchEndUserResponse {
    public String contentType;
    public FetchEndUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchEndUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUser numbersV2RegulatoryComplianceEndUser;
    public FetchEndUserResponse withNumbersV2RegulatoryComplianceEndUser(openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUser numbersV2RegulatoryComplianceEndUser) {
        this.numbersV2RegulatoryComplianceEndUser = numbersV2RegulatoryComplianceEndUser;
        return this;
    }
}