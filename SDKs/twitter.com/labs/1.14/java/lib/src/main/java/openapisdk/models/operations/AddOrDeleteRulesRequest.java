package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddOrDeleteRulesRequest {
    public AddOrDeleteRulesQueryParams queryParams;
    public AddOrDeleteRulesRequest withQueryParams(AddOrDeleteRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public AddOrDeleteRulesRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}