package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StsOauthtokenRequest {
    public StsOauthtokenQueryParams queryParams;
    public StsOauthtokenRequest withQueryParams(StsOauthtokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleIdentityStsV1ExchangeOauthTokenRequest request;
    public StsOauthtokenRequest withRequest(openapisdk.models.shared.GoogleIdentityStsV1ExchangeOauthTokenRequest request) {
        this.request = request;
        return this;
    }
}