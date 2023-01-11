package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TopUpAccountBalanceRequest {
    public String serverURL;
    public TopUpAccountBalanceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public TopUpAccountBalanceQueryParams queryParams;
    public TopUpAccountBalanceRequest withQueryParams(TopUpAccountBalanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.TopupRequest request;
    public TopUpAccountBalanceRequest withRequest(openapisdk.models.shared.TopupRequest request) {
        this.request = request;
        return this;
    }
}