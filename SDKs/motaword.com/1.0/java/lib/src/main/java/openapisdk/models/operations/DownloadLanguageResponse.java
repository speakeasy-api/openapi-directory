package openapisdk.models.operations;



public class DownloadLanguageResponse {
    public String contentType;
    public DownloadLanguageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DownloadLanguageResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DownloadLanguageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] downloadLanguage200ApplicationOctetStreamBinaryString;
    public DownloadLanguageResponse withDownloadLanguage200ApplicationOctetStreamBinaryString(byte[] downloadLanguage200ApplicationOctetStreamBinaryString) {
        this.downloadLanguage200ApplicationOctetStreamBinaryString = downloadLanguage200ApplicationOctetStreamBinaryString;
        return this;
    }
}