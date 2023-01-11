package openapisdk.models.operations;



public class LanguageDetectionsDetectResponse {
    public String contentType;
    public LanguageDetectionsDetectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetectionsListResponse detectionsListResponse;
    public LanguageDetectionsDetectResponse withDetectionsListResponse(openapisdk.models.shared.DetectionsListResponse detectionsListResponse) {
        this.detectionsListResponse = detectionsListResponse;
        return this;
    }
    public Long statusCode;
    public LanguageDetectionsDetectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}