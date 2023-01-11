package openapisdk.models.operations;



public class DownloadFileResponse {
    public String contentType;
    public DownloadFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DownloadFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] downloadFilePdfResponseBody;
    public DownloadFileResponse withDownloadFilePdfResponseBody(byte[] downloadFilePdfResponseBody) {
        this.downloadFilePdfResponseBody = downloadFilePdfResponseBody;
        return this;
    }
    public byte[] downloadFilePngResponseBody;
    public DownloadFileResponse withDownloadFilePngResponseBody(byte[] downloadFilePngResponseBody) {
        this.downloadFilePngResponseBody = downloadFilePngResponseBody;
        return this;
    }
    public byte[] downloadFileZplResponseBody;
    public DownloadFileResponse withDownloadFileZplResponseBody(byte[] downloadFileZplResponseBody) {
        this.downloadFileZplResponseBody = downloadFileZplResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public DownloadFileResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}