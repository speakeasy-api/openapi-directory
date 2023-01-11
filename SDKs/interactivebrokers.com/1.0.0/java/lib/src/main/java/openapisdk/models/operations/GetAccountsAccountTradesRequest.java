package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsAccountTradesRequest {
    public GetAccountsAccountTradesPathParams pathParams;
    public GetAccountsAccountTradesRequest withPathParams(GetAccountsAccountTradesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public GetAccountsAccountTradesRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}