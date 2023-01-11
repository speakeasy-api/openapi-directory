package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasTagsPartialUpdateRequest {
    public ExtrasTagsPartialUpdatePathParams pathParams;
    public ExtrasTagsPartialUpdateRequest withPathParams(ExtrasTagsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagInput request;
    public ExtrasTagsPartialUpdateRequest withRequest(openapisdk.models.shared.TagInput request) {
        this.request = request;
        return this;
    }
}