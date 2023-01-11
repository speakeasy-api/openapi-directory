package openapisdk.models.operations;



public class FetchRegulationResponse {
    public String contentType;
    public FetchRegulationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRegulationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceRegulation numbersV2RegulatoryComplianceRegulation;
    public FetchRegulationResponse withNumbersV2RegulatoryComplianceRegulation(openapisdk.models.shared.NumbersV2RegulatoryComplianceRegulation numbersV2RegulatoryComplianceRegulation) {
        this.numbersV2RegulatoryComplianceRegulation = numbersV2RegulatoryComplianceRegulation;
        return this;
    }
}