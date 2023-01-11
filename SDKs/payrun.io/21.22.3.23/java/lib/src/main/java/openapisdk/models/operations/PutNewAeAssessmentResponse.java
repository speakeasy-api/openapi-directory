package openapisdk.models.operations;



public class PutNewAeAssessmentResponse {
    public openapisdk.models.shared.AeAssessment aeAssessment;
    public PutNewAeAssessmentResponse withAeAssessment(openapisdk.models.shared.AeAssessment aeAssessment) {
        this.aeAssessment = aeAssessment;
        return this;
    }
    public String contentType;
    public PutNewAeAssessmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutNewAeAssessmentResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public PutNewAeAssessmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}