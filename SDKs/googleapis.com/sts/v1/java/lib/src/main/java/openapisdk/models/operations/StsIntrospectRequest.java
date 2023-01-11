package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StsIntrospectRequest {
    public StsIntrospectQueryParams queryParams;
    public StsIntrospectRequest withQueryParams(StsIntrospectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleIdentityStsV1IntrospectTokenRequest request;
    public StsIntrospectRequest withRequest(openapisdk.models.shared.GoogleIdentityStsV1IntrospectTokenRequest request) {
        this.request = request;
        return this;
    }
}