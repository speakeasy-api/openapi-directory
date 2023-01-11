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
    public Long statusCode;
    public GetAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAccount401ApplicationJson getAccount401ApplicationJSONObject;
    public GetAccountResponse withGetAccount401ApplicationJsonObject(GetAccount401ApplicationJson getAccount401ApplicationJSONObject) {
        this.getAccount401ApplicationJSONObject = getAccount401ApplicationJSONObject;
        return this;
    }
}