package openapisdk.models.operations;



public class UpdateEndUserResponse {
    public String contentType;
    public UpdateEndUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateEndUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUser numbersV2RegulatoryComplianceEndUser;
    public UpdateEndUserResponse withNumbersV2RegulatoryComplianceEndUser(openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUser numbersV2RegulatoryComplianceEndUser) {
        this.numbersV2RegulatoryComplianceEndUser = numbersV2RegulatoryComplianceEndUser;
        return this;
    }
}