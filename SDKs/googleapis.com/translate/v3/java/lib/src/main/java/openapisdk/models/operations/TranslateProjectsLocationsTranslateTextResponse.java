package openapisdk.models.operations;



public class TranslateProjectsLocationsTranslateTextResponse {
    public String contentType;
    public TranslateProjectsLocationsTranslateTextResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TranslateProjectsLocationsTranslateTextResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TranslateTextResponse translateTextResponse;
    public TranslateProjectsLocationsTranslateTextResponse withTranslateTextResponse(openapisdk.models.shared.TranslateTextResponse translateTextResponse) {
        this.translateTextResponse = translateTextResponse;
        return this;
    }
}