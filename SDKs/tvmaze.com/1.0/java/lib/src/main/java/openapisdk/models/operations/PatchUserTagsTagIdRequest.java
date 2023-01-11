package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUserTagsTagIdRequest {
    public PatchUserTagsTagIdPathParams pathParams;
    public PatchUserTagsTagIdRequest withPathParams(PatchUserTagsTagIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagInput request;
    public PatchUserTagsTagIdRequest withRequest(openapisdk.models.shared.TagInput request) {
        this.request = request;
        return this;
    }
}