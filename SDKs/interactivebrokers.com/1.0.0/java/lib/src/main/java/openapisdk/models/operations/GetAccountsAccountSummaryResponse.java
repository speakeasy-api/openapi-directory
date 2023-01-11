package openapisdk.models.operations;



public class GetAccountsAccountSummaryResponse {
    public String contentType;
    public GetAccountsAccountSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAccountsAccountSummary200ApplicationJson getAccountsAccountSummary200ApplicationJSONObject;
    public GetAccountsAccountSummaryResponse withGetAccountsAccountSummary200ApplicationJsonObject(GetAccountsAccountSummary200ApplicationJson getAccountsAccountSummary200ApplicationJSONObject) {
        this.getAccountsAccountSummary200ApplicationJSONObject = getAccountsAccountSummary200ApplicationJSONObject;
        return this;
    }
}