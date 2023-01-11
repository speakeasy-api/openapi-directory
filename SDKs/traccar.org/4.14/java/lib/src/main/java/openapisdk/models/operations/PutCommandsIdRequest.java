package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCommandsIdRequest {
    public PutCommandsIdPathParams pathParams;
    public PutCommandsIdRequest withPathParams(PutCommandsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Command request;
    public PutCommandsIdRequest withRequest(openapisdk.models.shared.Command request) {
        this.request = request;
        return this;
    }
}