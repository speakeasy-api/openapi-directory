package openapisdk.models.operations;



public class GetAccountBalanceRequest {
    public String serverURL;
    public GetAccountBalanceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public GetAccountBalanceQueryParams queryParams;
    public GetAccountBalanceRequest withQueryParams(GetAccountBalanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}