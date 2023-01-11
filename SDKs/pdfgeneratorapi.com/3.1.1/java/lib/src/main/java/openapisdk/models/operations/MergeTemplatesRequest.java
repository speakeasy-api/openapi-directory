package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MergeTemplatesRequest {
    public MergeTemplatesQueryParams queryParams;
    public MergeTemplatesRequest withQueryParams(MergeTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchData[] request;
    public MergeTemplatesRequest withRequest(openapisdk.models.shared.BatchData[] request) {
        this.request = request;
        return this;
    }
}