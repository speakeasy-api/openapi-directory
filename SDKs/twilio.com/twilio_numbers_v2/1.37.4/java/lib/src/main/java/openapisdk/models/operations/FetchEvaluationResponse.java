package openapisdk.models.operations;



public class FetchEvaluationResponse {
    public String contentType;
    public FetchEvaluationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchEvaluationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleEvaluation numbersV2RegulatoryComplianceBundleEvaluation;
    public FetchEvaluationResponse withNumbersV2RegulatoryComplianceBundleEvaluation(openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleEvaluation numbersV2RegulatoryComplianceBundleEvaluation) {
        this.numbersV2RegulatoryComplianceBundleEvaluation = numbersV2RegulatoryComplianceBundleEvaluation;
        return this;
    }
}