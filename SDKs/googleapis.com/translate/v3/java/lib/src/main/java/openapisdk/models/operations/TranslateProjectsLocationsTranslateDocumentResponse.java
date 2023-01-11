package openapisdk.models.operations;



public class TranslateProjectsLocationsTranslateDocumentResponse {
    public String contentType;
    public TranslateProjectsLocationsTranslateDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TranslateProjectsLocationsTranslateDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TranslateDocumentResponse translateDocumentResponse;
    public TranslateProjectsLocationsTranslateDocumentResponse withTranslateDocumentResponse(openapisdk.models.shared.TranslateDocumentResponse translateDocumentResponse) {
        this.translateDocumentResponse = translateDocumentResponse;
        return this;
    }
}