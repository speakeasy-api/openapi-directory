package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceleratedmobilepageurlAmpUrlsBatchGetRequest {
    public AcceleratedmobilepageurlAmpUrlsBatchGetQueryParams queryParams;
    public AcceleratedmobilepageurlAmpUrlsBatchGetRequest withQueryParams(AcceleratedmobilepageurlAmpUrlsBatchGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetAmpUrlsRequest request;
    public AcceleratedmobilepageurlAmpUrlsBatchGetRequest withRequest(openapisdk.models.shared.BatchGetAmpUrlsRequest request) {
        this.request = request;
        return this;
    }
}