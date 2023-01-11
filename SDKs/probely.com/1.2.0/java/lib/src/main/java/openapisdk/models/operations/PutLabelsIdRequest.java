package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutLabelsIdRequest {
    public PutLabelsIdPathParams pathParams;
    public PutLabelsIdRequest withPathParams(PutLabelsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LabelInput request;
    public PutLabelsIdRequest withRequest(openapisdk.models.shared.LabelInput request) {
        this.request = request;
        return this;
    }
}