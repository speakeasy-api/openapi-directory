package openapisdk.models.operations;



public class UpdateAnnotationResponse {
    public String contentType;
    public UpdateAnnotationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateAnnotationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InsightsV1CallAnnotation insightsV1CallAnnotation;
    public UpdateAnnotationResponse withInsightsV1CallAnnotation(openapisdk.models.shared.InsightsV1CallAnnotation insightsV1CallAnnotation) {
        this.insightsV1CallAnnotation = insightsV1CallAnnotation;
        return this;
    }
}