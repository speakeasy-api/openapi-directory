package openapisdk.models.operations;



public class LanguageDetectionResponse {
    public String contentType;
    public LanguageDetectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LanguagePredicted[] languageDetectionResponse;
    public LanguageDetectionResponse withLanguageDetectionResponse(openapisdk.models.shared.LanguagePredicted[] languageDetectionResponse) {
        this.languageDetectionResponse = languageDetectionResponse;
        return this;
    }
    public Long statusCode;
    public LanguageDetectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrors validationErrors;
    public LanguageDetectionResponse withValidationErrors(openapisdk.models.shared.ValidationErrors validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}