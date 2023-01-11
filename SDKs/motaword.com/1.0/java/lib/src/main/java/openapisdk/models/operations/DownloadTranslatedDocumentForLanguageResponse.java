package openapisdk.models.operations;



public class DownloadTranslatedDocumentForLanguageResponse {
    public String contentType;
    public DownloadTranslatedDocumentForLanguageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DownloadTranslatedDocumentForLanguageResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DownloadTranslatedDocumentForLanguageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] downloadTranslatedDocumentForLanguage200ApplicationOctetStreamBinaryString;
    public DownloadTranslatedDocumentForLanguageResponse withDownloadTranslatedDocumentForLanguage200ApplicationOctetStreamBinaryString(byte[] downloadTranslatedDocumentForLanguage200ApplicationOctetStreamBinaryString) {
        this.downloadTranslatedDocumentForLanguage200ApplicationOctetStreamBinaryString = downloadTranslatedDocumentForLanguage200ApplicationOctetStreamBinaryString;
        return this;
    }
}