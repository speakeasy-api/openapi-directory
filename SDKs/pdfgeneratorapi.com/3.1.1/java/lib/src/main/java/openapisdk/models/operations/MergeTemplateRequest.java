package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MergeTemplateRequest {
    public MergeTemplateQueryParams queryParams;
    public MergeTemplateRequest withQueryParams(MergeTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Data request;
    public MergeTemplateRequest withRequest(openapisdk.models.shared.Data request) {
        this.request = request;
        return this;
    }
}