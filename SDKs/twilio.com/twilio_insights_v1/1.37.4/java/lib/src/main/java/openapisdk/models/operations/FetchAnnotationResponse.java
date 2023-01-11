package openapisdk.models.operations;



public class FetchAnnotationResponse {
    public String contentType;
    public FetchAnnotationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchAnnotationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InsightsV1CallAnnotation insightsV1CallAnnotation;
    public FetchAnnotationResponse withInsightsV1CallAnnotation(openapisdk.models.shared.InsightsV1CallAnnotation insightsV1CallAnnotation) {
        this.insightsV1CallAnnotation = insightsV1CallAnnotation;
        return this;
    }
}