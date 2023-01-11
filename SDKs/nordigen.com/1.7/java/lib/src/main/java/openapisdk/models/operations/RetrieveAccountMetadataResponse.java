package openapisdk.models.operations;



public class RetrieveAccountMetadataResponse {
    public openapisdk.models.shared.Account account;
    public RetrieveAccountMetadataResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public String contentType;
    public RetrieveAccountMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RetrieveAccountMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}