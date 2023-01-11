package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StsTokenRequest {
    public StsTokenQueryParams queryParams;
    public StsTokenRequest withQueryParams(StsTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleIdentityStsV1betaExchangeTokenRequest request;
    public StsTokenRequest withRequest(openapisdk.models.shared.GoogleIdentityStsV1betaExchangeTokenRequest request) {
        this.request = request;
        return this;
    }
}