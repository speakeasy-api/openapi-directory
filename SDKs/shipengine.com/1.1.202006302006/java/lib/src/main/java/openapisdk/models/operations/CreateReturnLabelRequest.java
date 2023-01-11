package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateReturnLabelRequest {
    public CreateReturnLabelPathParams pathParams;
    public CreateReturnLabelRequest withPathParams(CreateReturnLabelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateReturnLabelRequestBody request;
    public CreateReturnLabelRequest withRequest(openapisdk.models.shared.CreateReturnLabelRequestBody request) {
        this.request = request;
        return this;
    }
}