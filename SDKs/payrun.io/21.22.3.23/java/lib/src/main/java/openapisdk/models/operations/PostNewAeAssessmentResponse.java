package openapisdk.models.operations;



public class PostNewAeAssessmentResponse {
    public String contentType;
    public PostNewAeAssessmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PostNewAeAssessmentResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.Link link;
    public PostNewAeAssessmentResponse withLink(openapisdk.models.shared.Link link) {
        this.link = link;
        return this;
    }
    public Long statusCode;
    public PostNewAeAssessmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}