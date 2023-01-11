package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEditorUrlRequest {
    public GetEditorUrlQueryParams queryParams;
    public GetEditorUrlRequest withQueryParams(GetEditorUrlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetEditorUrlRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}