package openapisdk.models.operations;



public class DownloadResponse {
    public String contentType;
    public DownloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DownloadResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DownloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] download200ApplicationOctetStreamBinaryString;
    public DownloadResponse withDownload200ApplicationOctetStreamBinaryString(byte[] download200ApplicationOctetStreamBinaryString) {
        this.download200ApplicationOctetStreamBinaryString = download200ApplicationOctetStreamBinaryString;
        return this;
    }
}