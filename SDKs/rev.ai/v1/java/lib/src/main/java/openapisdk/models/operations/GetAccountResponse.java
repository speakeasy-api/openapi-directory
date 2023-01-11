package openapisdk.models.operations;



public class GetAccountResponse {
    public openapisdk.models.shared.Account account;
    public GetAccountResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public String contentType;
    public GetAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object getAccount401ApplicationProblemPlusJsonAny;
    public GetAccountResponse withGetAccount401ApplicationProblemPlusJsonAny(Object getAccount401ApplicationProblemPlusJsonAny) {
        this.getAccount401ApplicationProblemPlusJsonAny = getAccount401ApplicationProblemPlusJsonAny;
        return this;
    }
    public Long statusCode;
    public GetAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}