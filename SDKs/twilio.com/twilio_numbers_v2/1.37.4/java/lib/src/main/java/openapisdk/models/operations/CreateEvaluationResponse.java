package openapisdk.models.operations;



public class CreateEvaluationResponse {
    public String contentType;
    public CreateEvaluationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateEvaluationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleEvaluation numbersV2RegulatoryComplianceBundleEvaluation;
    public CreateEvaluationResponse withNumbersV2RegulatoryComplianceBundleEvaluation(openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleEvaluation numbersV2RegulatoryComplianceBundleEvaluation) {
        this.numbersV2RegulatoryComplianceBundleEvaluation = numbersV2RegulatoryComplianceBundleEvaluation;
        return this;
    }
}