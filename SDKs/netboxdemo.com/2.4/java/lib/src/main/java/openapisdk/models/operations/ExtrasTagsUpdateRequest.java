package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasTagsUpdateRequest {
    public ExtrasTagsUpdatePathParams pathParams;
    public ExtrasTagsUpdateRequest withPathParams(ExtrasTagsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagInput request;
    public ExtrasTagsUpdateRequest withRequest(openapisdk.models.shared.TagInput request) {
        this.request = request;
        return this;
    }
}