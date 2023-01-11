package openapisdk.models.operations;



public class GetThirdPartyTransactionRequest {
    public GetThirdPartyTransactionPathParams pathParams;
    public GetThirdPartyTransactionRequest withPathParams(GetThirdPartyTransactionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetThirdPartyTransactionHeaders headers;
    public GetThirdPartyTransactionRequest withHeaders(GetThirdPartyTransactionHeaders headers) {
        this.headers = headers;
        return this;
    }
}