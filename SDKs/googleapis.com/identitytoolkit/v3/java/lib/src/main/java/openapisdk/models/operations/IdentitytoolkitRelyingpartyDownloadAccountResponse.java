package openapisdk.models.operations;



public class IdentitytoolkitRelyingpartyDownloadAccountResponse {
    public String contentType;
    public IdentitytoolkitRelyingpartyDownloadAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DownloadAccountResponse downloadAccountResponse;
    public IdentitytoolkitRelyingpartyDownloadAccountResponse withDownloadAccountResponse(openapisdk.models.shared.DownloadAccountResponse downloadAccountResponse) {
        this.downloadAccountResponse = downloadAccountResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitRelyingpartyDownloadAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}