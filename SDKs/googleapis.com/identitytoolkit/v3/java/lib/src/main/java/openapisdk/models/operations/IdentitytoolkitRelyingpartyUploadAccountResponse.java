package openapisdk.models.operations;



public class IdentitytoolkitRelyingpartyUploadAccountResponse {
    public String contentType;
    public IdentitytoolkitRelyingpartyUploadAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitRelyingpartyUploadAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UploadAccountResponse uploadAccountResponse;
    public IdentitytoolkitRelyingpartyUploadAccountResponse withUploadAccountResponse(openapisdk.models.shared.UploadAccountResponse uploadAccountResponse) {
        this.uploadAccountResponse = uploadAccountResponse;
        return this;
    }
}