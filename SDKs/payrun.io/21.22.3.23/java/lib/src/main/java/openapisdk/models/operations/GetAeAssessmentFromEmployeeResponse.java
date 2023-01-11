package openapisdk.models.operations;



public class GetAeAssessmentFromEmployeeResponse {
    public openapisdk.models.shared.AeAssessment aeAssessment;
    public GetAeAssessmentFromEmployeeResponse withAeAssessment(openapisdk.models.shared.AeAssessment aeAssessment) {
        this.aeAssessment = aeAssessment;
        return this;
    }
    public String contentType;
    public GetAeAssessmentFromEmployeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetAeAssessmentFromEmployeeResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetAeAssessmentFromEmployeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}