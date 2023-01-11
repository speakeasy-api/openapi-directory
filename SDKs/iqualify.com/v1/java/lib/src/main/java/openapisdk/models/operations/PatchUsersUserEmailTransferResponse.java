package openapisdk.models.operations;



public class PatchUsersUserEmailTransferResponse {
    public String contentType;
    public PatchUsersUserEmailTransferResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PatchUsersUserEmailTransferResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PatchUsersUserEmailTransferResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}