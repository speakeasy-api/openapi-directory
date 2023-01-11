package openapisdk.models.operations;



public class LanguageDetectionsListResponse {
    public String contentType;
    public LanguageDetectionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetectionsListResponse detectionsListResponse;
    public LanguageDetectionsListResponse withDetectionsListResponse(openapisdk.models.shared.DetectionsListResponse detectionsListResponse) {
        this.detectionsListResponse = detectionsListResponse;
        return this;
    }
    public Long statusCode;
    public LanguageDetectionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}