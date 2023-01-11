package openapisdk.models.operations;



public class AdexchangebuyerAccountsPatchResponse {
    public openapisdk.models.shared.Account account;
    public AdexchangebuyerAccountsPatchResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public String contentType;
    public AdexchangebuyerAccountsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerAccountsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}