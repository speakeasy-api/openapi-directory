package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLabelsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LabelInput request;
    public PostLabelsRequest withRequest(openapisdk.models.shared.LabelInput request) {
        this.request = request;
        return this;
    }
}