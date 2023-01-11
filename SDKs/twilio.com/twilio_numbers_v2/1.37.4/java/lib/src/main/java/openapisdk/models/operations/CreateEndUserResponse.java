package openapisdk.models.operations;



public class CreateEndUserResponse {
    public String contentType;
    public CreateEndUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateEndUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUser numbersV2RegulatoryComplianceEndUser;
    public CreateEndUserResponse withNumbersV2RegulatoryComplianceEndUser(openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUser numbersV2RegulatoryComplianceEndUser) {
        this.numbersV2RegulatoryComplianceEndUser = numbersV2RegulatoryComplianceEndUser;
        return this;
    }
}