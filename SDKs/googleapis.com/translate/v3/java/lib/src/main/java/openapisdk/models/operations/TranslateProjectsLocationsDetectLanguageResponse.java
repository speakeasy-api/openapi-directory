package openapisdk.models.operations;



public class TranslateProjectsLocationsDetectLanguageResponse {
    public String contentType;
    public TranslateProjectsLocationsDetectLanguageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetectLanguageResponse detectLanguageResponse;
    public TranslateProjectsLocationsDetectLanguageResponse withDetectLanguageResponse(openapisdk.models.shared.DetectLanguageResponse detectLanguageResponse) {
        this.detectLanguageResponse = detectLanguageResponse;
        return this;
    }
    public Long statusCode;
    public TranslateProjectsLocationsDetectLanguageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}