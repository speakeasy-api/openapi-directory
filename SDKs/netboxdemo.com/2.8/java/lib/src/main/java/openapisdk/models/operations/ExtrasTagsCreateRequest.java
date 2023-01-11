package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasTagsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagInput request;
    public ExtrasTagsCreateRequest withRequest(openapisdk.models.shared.TagInput request) {
        this.request = request;
        return this;
    }
}