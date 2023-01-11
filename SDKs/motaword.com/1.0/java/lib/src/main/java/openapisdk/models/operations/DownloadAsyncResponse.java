package openapisdk.models.operations;



public class DownloadAsyncResponse {
    public String contentType;
    public DownloadAsyncResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DownloadAsyncResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DownloadAsyncResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] downloadAsync200ApplicationOctetStreamBinaryString;
    public DownloadAsyncResponse withDownloadAsync200ApplicationOctetStreamBinaryString(byte[] downloadAsync200ApplicationOctetStreamBinaryString) {
        this.downloadAsync200ApplicationOctetStreamBinaryString = downloadAsync200ApplicationOctetStreamBinaryString;
        return this;
    }
}