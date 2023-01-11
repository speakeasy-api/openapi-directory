package openapisdk.models.operations;



public class DfareportingAccountsPatchResponse {
    public openapisdk.models.shared.Account account;
    public DfareportingAccountsPatchResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public String contentType;
    public DfareportingAccountsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAccountsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}