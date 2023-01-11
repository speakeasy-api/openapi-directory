package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchLabelsIdRequest {
    public PatchLabelsIdPathParams pathParams;
    public PatchLabelsIdRequest withPathParams(PatchLabelsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LabelInput request;
    public PatchLabelsIdRequest withRequest(openapisdk.models.shared.LabelInput request) {
        this.request = request;
        return this;
    }
}